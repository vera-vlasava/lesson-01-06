import React from "react";
import AddReaction from "./AddReaction";

const PhotoCard = ({ photo }) => {
  return (
    <div className="col-6 col-sm-4 col-md-3">
      <div className="card">
        <img src={photo.src} alt={photo.title} />
        <div className="card-body">
          <p className="card-title">{photo.title}</p>
          <p className="card-text">
            <AddReaction photo={photo} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
