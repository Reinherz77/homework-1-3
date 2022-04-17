import React from 'react';
import ArtistAPI from '../artist-album';
import CoverAPI from '../cover-song/cover';
import TitleAPI from '../title-song/title';
import './card-song.css'

interface cardsong {
    url:string;
    title:string;
    artist:string;
    uri:string;
    selectState:any;
    isSelected:string;
}

const CardSong = ({url, title , artist , uri , selectState , isSelected }:cardsong) => {
    return (
        <div className='CardSong'>
            <CoverAPI url={url}/>
            <ArtistAPI artist={artist}/>
            <TitleAPI album={title}/>
            <button className='btn-select' onClick={() => {
                selectState(uri);
                }}>
            {isSelected ? "Deselect" : "Select"}
            </button>
        </div>
    )
}

export default CardSong