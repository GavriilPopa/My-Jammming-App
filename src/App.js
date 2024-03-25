import React, { useState, useCallback } from "react";
import "./App.css";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Spotify from "./Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term)
      .then((results) => {
        setSearchResults(results);
      })
      .catch((error) => {
        console.error('Error occurred while searching:', error);
      });
  }, []);

  const addTrack = useCallback((track) => {
    if (!playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div className="App">
      <header className="Header">
        <h1>JammmingApp</h1>
      </header>
      <div className="SearchBar">
        <SearchBar onSearch={search} />
      </div>
      <div className="Left">
        <SearchResults searchResults={searchResults} onAddTrack={addTrack} />
      </div>
      <div className="Right">
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
      <footer className="Footer">
        <p>Enjoy Your Music!!!</p>
      </footer>
    </div>
  );
}

export default App;

