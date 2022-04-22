const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_APP
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URL_AFTER_LOGIN = 'https://homework-1-3.vercel.app/searchsong'
// const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/searchsong'
const SCOPES = "playlist-modify-private"

const auth = () => {
    window.location.href = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES}&response_type=token&show_dialog=true`;
    localStorage.setItem("isLogIn", true)
};

export default auth;