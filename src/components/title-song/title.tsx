import React from "react"

interface titleapi {
    album:string
}

const TitleAPI = (props:titleapi) => {
    return <h4>{props.album}</h4>
    // <h4>{data.album.name}</h4>
}

export default TitleAPI