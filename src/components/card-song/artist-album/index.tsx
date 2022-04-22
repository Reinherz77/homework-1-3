import React from "react"

interface artistapi{
    artist: string;
}

const ArtistAPI = (props:artistapi) => {
    return <p>{props.artist}</p>
    // <p>{data.album.artists[0].name}</p>
}

export default ArtistAPI