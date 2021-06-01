import React, {useState} from "react"

const AddPhoto = ({albumId, addNewPhoto}) => {

    const [photo, setPhoto] = useState({
        albumId,
        title: '',
        src: ''
    })

    const changeHandle = event => {
        setPhoto({...photo, [event.target.name]: event.target.value})
    }

    const submitHandle = event => {
        event.preventDefault()

        addNewPhoto(photo)

        setPhoto({
            albumId,
            title: '',
            src: ''
        })
    }

    return (
        <form onSubmit={submitHandle}>
            <div className="form-group mb-2">
                <label>Title</label>
                <input type="text" className="form-control" name="title" value={photo.title} onChange={changeHandle}/>
            </div>
            <div className="form-group mb-2">
                <label>SRC</label>
                <input type="text" className="form-control" name="src" value={photo.src} onChange={changeHandle}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </div>
        </form>
    )
}

export default AddPhoto