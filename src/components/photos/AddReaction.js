import React, { useContext } from "react";
import { GlobalContext } from "../App";

const AddReaction = ({photo}) => {
  const { addPhotoReaction } = useContext(GlobalContext);

  const addLike = (event) => {
    addPhotoReaction(photo.id, 1);
  };

  const addDislike = (event) => {
    addPhotoReaction(photo.id, -1);
  };

  return (
    <div>
      <button onClick={addLike}>Like({photo.like})</button>
      <button onClick={addDislike}>DisLike({photo.dislike})</button>
    </div>
  );
};

export default AddReaction;
