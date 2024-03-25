import React from "react";
import PropTypes from "prop-types";
import Track from "../Track/Track";
import "./Tracklist.css";

function Tracklist(props) {
  return (
    <div className="Tracklist">
      {props.tracks.map((track) => (
        <Track
          track={track}
          key={track.id}
          onAdd={props.onAdd}
          isRemoval={props.isRemoval}
          onRemove={props.onRemove}
        />
      ))}
    </div>
  );
}

Tracklist.propTypes = {
  tracks: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isRemoval: PropTypes.bool // Ensure isRemoval is passed and is a boolean
};

Tracklist.defaultProps = {
  isRemoval: false // Default value for isRemoval
};

export default Tracklist;
