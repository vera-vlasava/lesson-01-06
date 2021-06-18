import React from "react";
import { connect } from "react-redux";
import AlbumCard from "./AlbumCard";

const Albums = ({albums, photos}) => {
  const renderAlbums = () => {
    if (!albums.length) {
      return <h1>No albums</h1>;
    }
    return (
      <div className="row">
        {albums.map((album) => {
          const albumPhotos = photos.filter((p) => p.albumId === album.id);
          if (albumPhotos.length === 0) return null;
          
          return (
            <AlbumCard key={album.id} album={album} photo={albumPhotos[0]} />
          );
        })}
      </div>
    );
  };

  return <div className="container">{renderAlbums()}</div>;
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums.list,
    photos: state.photos.list
  };
};

export default connect(mapStateToProps, null)(Albums);
