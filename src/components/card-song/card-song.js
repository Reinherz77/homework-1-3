import React from 'react';
import ArtistAPI from '../artist-album';
import CoverAPI from '../cover-song';
import TitleAPI from '../title-song';
import './index.css'

const CardSong = ({url, title , artist , uri , selectState , isSelected }) => {
    return (
        <div className='CardSong'>
            <CoverAPI url={url}/>
            <ArtistAPI artist={artist}/>
            <TitleAPI album={title}/>
            <button onClick={() => {
                selectState(uri);
                }}>
            {isSelected ? "Deselect" : "Select"}
            </button>
        </div>
    )
}

export default CardSong