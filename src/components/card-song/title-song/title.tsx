import React from "react"

interface titleApi {
    album:string
}

const TitleAPI = (props:titleApi) => {
    return <h4>{props.album}</h4>
    // <h4>{data.album.name}</h4>
}

export default TitleAPI