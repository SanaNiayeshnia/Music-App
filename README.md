# 🎵 Music Discovery and Playback Web Application

This project is a **Music Discovery and Playback Web Application** developed using the **Spotify API** and **Web Playback SDK**.  
The goal is to provide a user experience similar to professional music apps, enabling users to **discover artists, playlists, albums, and tracks** while respecting the limitations of Free and Premium accounts.

---

## 🚀 Features

- 🔍 **Music Discovery**: Browse by genres, albums, playlists, and artists.
- 🎧 **Playback Control**: Play, pause, skip, shuffle, and manage the playback queue.
- 📚 **User Library**: Save favorite songs, playlists, and albums.
- 👤 **Account Center**: Manage user account and preferences.
- 📱 **Responsive Design**: Optimized for desktop and mobile with **PWA support**.
- ⚡ **Real-time Updates**: Smart data fetching and caching with **React-Query**.

---

## 🛠️ Technologies Used

- **React** – Component-based UI library
- **Tailwind CSS + MUI** – Modern and responsive design
- **React-Query** – Data fetching and caching
- **Redux Toolkit & Context API** – State management
- **React-Hook-Form** – Form handling
- **Swiper** – Interactive sliders
- **React-Router-Dom** – Navigation and routing
- **Spotify API** – Music data and playback
- **PWA** – Installable Progressive Web App

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js >= 18
- npm or yarn package manager
- Spotify Developer Account (with registered application in [Spotify Developer Dashboard](https://developer.spotify.com/dashboard))

> ⚠️ **Important:**

> 1.  Only users who are explicitly added in the **Users and Access** section of your app in the Spotify Developer Dashboard can authenticate in **development mode**.
> 2.  You can add up to **25 users** in this mode.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/SanaNiayeshnia/Music-App.git
   cd Music-App
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your **Spotify API credentials**:

   ```env
   VITE_APP_NAME="Music App"
   VITE_CLIENT_ID=your_client_id
   VITE_CLIENT_SECRET=your_client_secret
   VITE_REDIRECT_URI=http://localhost:5173/
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 🎥 Demo

- [📺 Desktop Demo](https://drive.google.com/file/d/1sEy0h1oFThV0kvw9fXBDGD_1PkaKYBA2/view?usp=drive_link)
- [📱 Mobile Demo](https://drive.google.com/file/d/16v_ssaG_XT59KqzzB92bRdNwhG_bso7C/view?usp=sharing)

---

## 📖 Thesis Reference

This project is based on the Bachelor thesis:  
**"Music Discovery and Playback Web Application"**  
_By: Sana Niayeshnia – Supervisor: Yusef Musazadeh (Shariaty Technical College, 2025)_
