import React, {useContext, useState, useEffect} from "react"
import {GlobalContext} from "../App"

const AddAlbum = ({onFinish}) => {
    const {activePerson} = useContext(GlobalContext)
    const [formData, setFormData] = useState({
        personId: activePerson,
        title: ''
    })

    const changeHandle = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
        onFinish(formData)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group mb-2">
                <label>Title</label>
                <input type="text" className="form-control" name="title" onChange={changeHandle}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Add</button>
            </div>
        </form>
    )
}

export default AddAlbum