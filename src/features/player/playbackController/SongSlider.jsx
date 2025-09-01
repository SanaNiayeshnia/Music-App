import { useSelector } from "react-redux";
import SliderBar from "../../../ui/SliderBar";
import { formatTrackDuration } from "../../../utilities/helper";
import { useEffect, useState, useRef } from "react";
import { usePlayerContext } from "../hooks/usePlayerContext";

function SongSlider({
  displayLables = true,
  lightMode = false,
  pollInterval = 100,
}) {
  const { playerState, currentTrack, player } = usePlayerContext();
  const { isFullScreenPlayingTrackOpen } = useSelector(
    (store) => store.playback,
  );

  const [position, setPosition] = useState(playerState?.position || 0);
  const [isSeeking, setIsSeeking] = useState(false);

  const pollingRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Keep position in sync when track changes / state resets
  useEffect(() => {
    setPosition(playerState?.position || 0);
  }, [playerState?.position, currentTrack?.id]);

  // Polling loop: prefer player.getCurrentState() (Spotify SDK) for authoritative position
  useEffect(() => {
    // don't poll if no current track or while user is seeking
    if (!player || !currentTrack?.id) return;

    // clear any existing poll
    if (pollingRef.current) {
      clearInterval(pollingRef.current);
      pollingRef.current = null;
    }

    const doPoll = async () => {
      try {
        // If SDK exposes getCurrentState, use it
        if (typeof player.getCurrentState === "function") {
          const state = await player.getCurrentState();
          if (!mountedRef.current) return;
          if (state && !isSeeking) {
            // 'state.position' is provided by SDK (ms)
            const pos = typeof state.position === "number" ? state.position : 0;
            // clamp to duration if available
            const max = currentTrack?.duration_ms || Infinity;
            setPosition(Math.min(pos, max));
          }
        } else {
          // fallback: use playerState from context (less real-time but still works)
          if (!isSeeking && playerState) {
            const pos =
              typeof playerState.position === "number"
                ? playerState.position
                : 0;
            const max = currentTrack?.duration_ms || Infinity;
            setPosition(Math.min(pos, max));
          }
        }
      } catch (err) {
        // swallow transient errors but log for debugging
        // console.debug("poll error", err);
      }
    };

    // Immediately run once so UI updates without waiting
    doPoll();

    // Only poll when not paused (if we can detect paused)
    const shouldPoll = !(playerState?.paused || false);

    if (shouldPoll) {
      pollingRef.current = setInterval(doPoll, pollInterval);
    } else {
      // even if paused, still run a single poll so UI shows correct position
      // and then remain idle until state changes (playerState effect will run)
      // no interval started
    }

    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };
    // note: we intentionally include player and currentTrack, but not playerState (we poll it)
  }, [
    player,
    currentTrack?.id,
    currentTrack?.duration_ms,
    isSeeking,
    pollInterval,
    playerState?.paused,
  ]);

  function changePosition(value) {
    if (!currentTrack?.id) return;
    setPosition(value);
  }

  async function onSeek(value) {
    if (!player || !currentTrack?.id) return;
    setIsSeeking(true);
    try {
      const ms = Number(value) || 0;
      // Spotify SDK: player.seek(ms) returns a Promise
      if (typeof player.seek === "function") {
        await player.seek(ms);
      } else if (typeof player.togglePlay === "function") {
        // Not ideal — but keep graceful fallback (no-op)
      }
      // update UI immediately after seek
      setPosition(ms);
    } catch (err) {
      console.error("seek failed", err);
    } finally {
      // short buffer to let SDK update internal state, then resume polling
      setTimeout(() => {
        if (mountedRef.current) setIsSeeking(false);
      }, 250);
    }
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`flex items-center gap-2 ${isFullScreenPlayingTrackOpen ? "text-base" : "text-sm"}`}
    >
      {displayLables && (
        <span
          className={`${isFullScreenPlayingTrackOpen ? "text-black/70 dark:text-white/70" : "text-gray-600 dark:text-gray-300"} font-medium`}
        >
          {formatTrackDuration(Math.max(0, Math.floor(position || 0)))}
        </span>
      )}

      <SliderBar
        disabled={!currentTrack?.id || playerState?.loading}
        thumbDisplay="off"
        valueLabelDisplay="off"
        value={Number(position || 0)}
        max={currentTrack?.duration_ms || 0}
        onChange={changePosition}
        onChangeCommitted={onSeek}
        lightMode={lightMode}
      />

      {displayLables && (
        <span
          className={`${isFullScreenPlayingTrackOpen ? "text-black/70 dark:text-white/70" : "text-gray-600 dark:text-gray-300"} font-medium`}
        >
          {formatTrackDuration(currentTrack?.duration_ms || 0)}
        </span>
      )}
    </div>
  );
}

export default SongSlider;
