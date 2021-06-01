import React from "react"

import {useParams} from 'react-router-dom'

const Album = () => {
    const {id} = useParams()

    return (<h1>Album #{id}</h1>)
}

export default Album