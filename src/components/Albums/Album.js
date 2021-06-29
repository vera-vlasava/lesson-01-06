import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setAlbumById } from "../../store/actions/act_albums";
import PhotoCard from "../photos/PhotoCard";

const Album = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect (
   () => {
     dispatch(setAlbumById(+id))
   }, []
  ) 
  const album = useSelector(
    (state) => state.albums.albumById
    )
  const data = useSelector((state) => {
    let idx = state.albums.list.findIndex((a) => a.id === +id);
    if (idx === -1) return { album: null, person: null, albumPhotos: null };

    const album = state.albums.list[idx];

    idx = state.persons.list.findIndex((p) => p.id === album.person_id);
    if (idx === -1) return { album: null, person: null, albumPhotos: null };

    const person = state.persons.list[idx];

    const albumPhotos = state.photos.list.filter((p) => p.album_id === +id);

    return { album, person, albumPhotos };
  });

  const renderAlbum = () => {
    if (!data.album || !data.person) {
      return <div>Loading ...</div>;
    }
    return (
      <div className="container">
        <h1>{data.album.title}</h1>
        <h2>
          by {data.person.l_name} {data.person.f_name}
        </h2>
        <div className="row">
          {data.albumPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
  };

  return renderAlbum();
};

export default Album;
