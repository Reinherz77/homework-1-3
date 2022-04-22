import React from 'react'

interface durationApi {
    duration_ms: number
    time?: number
    seconds?: number
    minutes?: number

}

function msToTime(time:number) {
    var minutes = Math.floor(time / 60000);
    let seconds = Math.round(((time % 60000) / 1000));
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const DurationAPI = (props:durationApi) => {
    return <p>{props.duration_ms? msToTime(props.duration_ms) : ""}</p>
}

export default DurationAPI