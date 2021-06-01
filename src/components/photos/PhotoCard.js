import React from 'react'


const PhotoCard = ({photo}) => {
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <div className="card">
                <img src={photo.src} alt={photo.title}/>
                <div className="card-body">
                    <p className="card-title">{photo.title}</p>
                    <p className="card-text">
                        <button>Like({photo.like})</button>
                        <button>DisLike({photo.dislike})</button>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PhotoCard