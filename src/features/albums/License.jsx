function License({ release, copyright, soundRecording }) {
  return (
    <div className="px-3">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {release}
      </p>
      <p className="text-[0.6rem] text-gray-700 dark:text-gray-300">
        © {copyright}
      </p>
      <p className="text-[0.6rem] text-gray-700 dark:text-gray-300">
        ℗ {soundRecording}
      </p>
    </div>
  );
}

export default License;
