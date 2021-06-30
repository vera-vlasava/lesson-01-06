import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setAlbumById } from "../../store/actions/act_albums";
import PhotoCard from "../photos/PhotoCard";
import {setPhotosByAlbumId} from "../../store/actions/act_photos";
import {setPersonById} from "../../store/actions/act_persons";

const Album = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect (
   () => {
       dispatch(setAlbumById(+id))
       dispatch(setPhotosByAlbumId(+id))
   }, [])

    const album = useSelector(
        (state) => state.albums.albumById
    )
    useEffect (
        () => {
            if (album) {
                console.log(album)
                dispatch(setPersonById(album.person_id))
            }
        }, [album])

    const person = useSelector(
        (state) => state.persons.personById
    )
  const albumPhotos = useSelector(
    (state) => state.photos.list
    )
  // const data = useSelector((state) => {
  //   let idx = state.albums.list.findIndex((a) => a.id === +id);
  //   if (idx === -1) return { album: null, person: null, albumPhotos: null };
  //
  //   const album = state.albums.list[idx];
  //
  //   idx = state.persons.list.findIndex((p) => p.id === album.person_id);
  //   if (idx === -1) return { album: null, person: null, albumPhotos: null };
  //
  //   const person = state.persons.list[idx];
  //
  //   const albumPhotos = state.photos.list.filter((p) => p.album_id === +id);
  //
  //   return { album, person, albumPhotos };
  // });

  const renderAlbum = () => {
    if (!album || !person) {
      return <div>Loading ...</div>;
    }
    return (
      <div className="container">
        <h1>{album.title}</h1>
        <h2>
          by {person.l_name} {person.f_name}
        </h2>
        <div className="row">
          {albumPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
  };

  return renderAlbum();
};

export default Album;
