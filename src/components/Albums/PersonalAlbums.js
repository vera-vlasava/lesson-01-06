import React, {useContext} from "react"
import {GlobalContext} from "../App"
import PhotoCard from "../photos/PhotoCard";
import AddPhoto from "../photos/AddPhoto";


const PersonalAlbums = ({personId}) => {
    const {albums, photos, addNewPhoto, activePerson} = useContext(GlobalContext)
    const renderAlbum = () => {
        const personalList = albums.filter(a => a.personId === personId)
        return personalList.map(a => (
            <div key={a.id}>
                <h3>{a.title}</h3>
                <div className="row">
                    {renderPhotosByAlbum(a.id)}
                </div>
                <div>
                    { activePerson === personId ? <AddPhoto albumId={a.id} addNewPhoto={addNewPhoto} /> : null }
                </div>
            </div>
        ))
    }

    const renderPhotosByAlbum = albumId => {
        const albumPhotos = photos.filter(photo => photo.albumId === albumId)
        return albumPhotos.map(photo => (<PhotoCard key={photo.id} photo={photo} />))
    }

    return (
        renderAlbum()
    )
}

export default PersonalAlbums