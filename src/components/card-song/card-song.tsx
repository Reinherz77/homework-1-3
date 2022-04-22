import React from 'react';
import ArtistAPI from './artist-album';
import CoverAPI from './cover-song/cover';
import TitleAPI from './title-song/title';
import DurationAPI from './duration-song/duration';
import './card-song.css'

interface cardSong {
    url:string;
    title:string;
    artist:string;
    uri:string;
    selectState:any;
    isSelected:string;
    duration:number;
}

const CardSong = ({url, title , artist , uri , selectState , isSelected , duration }:cardSong) => {
    return (
        <div className='CardSong'>
            <CoverAPI url={url}/>
            <ArtistAPI artist={artist}/>
            <TitleAPI album={title}/>
            <DurationAPI duration_ms={duration} />
            <button className='btn-select' onClick={() => {
                selectState(uri);
                }}>
            {isSelected ? "Deselect" : "Select"}
            </button>
        </div>
    )
}

export default CardSong