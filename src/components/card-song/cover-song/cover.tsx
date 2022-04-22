import React from "react"

interface coverapi {
    url:string
}

const CoverAPI = (props:coverapi) => {
    return <img src={props.url} alt="" />
    // <img src={data.album.images[1].url} alt=''></img>
}

export default CoverAPI