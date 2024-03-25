import React from "react";
import PropTypes from "prop-types";

function Track(props) {
  const addTrack = () => {
    props.onAdd?.(props.track);
  };

  const removeTrack = () => {
    props.onRemove?.(props.track);
  };

  const renderAction = () => {
    return (
      <button className="Track-action" onClick={props.isRemoval ? removeTrack : addTrack}>
        {props.isRemoval ? "-" : "+"}
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

Track.propTypes = {
  track: PropTypes.object.isRequired,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isRemoval: PropTypes.bool,
};

Track.defaultProps = {
  isRemoval: false,
};

export default Track;




