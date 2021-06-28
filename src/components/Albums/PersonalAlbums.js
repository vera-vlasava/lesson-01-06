import React from "react";
import PhotoCard from "../photos/PhotoCard";
import AddPhoto from "../photos/AddPhoto";
import { connect } from "react-redux";

const PersonalAlbums = ({ personId, albums, photos }) => {
  const activePerson = +localStorage.userId
  const renderAlbum = () => {
    const personalList = albums.filter((a) => a.person_id === personId);
    return personalList.map((a) => (
      <div key={a.id}>
        <h3>{a.title}</h3>
        <div className="row">{renderPhotosByAlbum(a.id)}</div>
        <div>
          {activePerson === personId ? (
            <AddPhoto albumId={a.id} />
          ) : null}
        </div>
      </div>
    ));
  };

  const renderPhotosByAlbum = (albumId) => {
    const albumPhotos = photos.filter((photo) => photo.album_id === albumId);
    return albumPhotos.map((photo) => (
      <PhotoCard key={photo.id} photo={photo} />
    ));
  };

  return renderAlbum();
};

const mapStateToProps = (state) => {
  return {
   
    albums: state.albums.list,
    photos: state.photos.list,
  };
};

export default connect(mapStateToProps, null)(PersonalAlbums);
