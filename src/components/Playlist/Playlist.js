import React, { useCallback } from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist({ onNameChange, playlistTracks, onRemove, onSave }) {
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <Tracklist
        tracks={playlistTracks}
        isRemoval={true}
        onRemove={onRemove}
      />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;



