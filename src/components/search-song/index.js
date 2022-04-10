import React from 'react'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_APP
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/searchsong"
const SPACE_DELIMITER = "&20"
const SCOPES = "playlist-modify-private"
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const SearchSong = () => {
    const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
};
    return (
        <div className='container'>
            <h1>Homework Module 3 Session 1</h1>
            <button onClick={handleLogin}>Authorize</button>
        </div>
    )
}

export default SearchSong