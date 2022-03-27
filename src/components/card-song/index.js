import React from 'react';
import ArtistAPI from '../artist-album';
import CoverAPI from '../cover-song';
import TitleAPI from '../title-song';
import './index.css'

const CardSong = ({url, title , artist , album}) => {
    return (
        <div className='CardSong'>
            <CoverAPI url={url}/>
            <ArtistAPI artist={artist}/>
            <TitleAPI album={title}/>
            <button>Select</button>
        </div>
    )
}

export default CardSong