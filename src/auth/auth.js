// var client_id = process.env.REACT_APP_CLIENT_ID_APP;
// var redirect_uri = "http://localhost:3000";

// var state = "NaufalHafiz";

// localStorage.setItem("TOKEN", state);
// var scope = "playlist-modify-private";

// var auth = "https://accounts.spotify.com/authorize";
// auth += "?response_type=token";
// auth += "&client_id=" + encodeURIComponent(client_id);
// auth += "&scope=" + encodeURIComponent(scope);
// auth += "&redirect_uri=" + encodeURIComponent(redirect_uri);
// auth += "&state=" + encodeURIComponent(state);

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID_APP
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/searchsong"
const SCOPES = "playlist-modify-private"

const auth = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES}&response_type=token&show_dialog=true`;
    localStorage.setItem("isLogIn", true)
};

export default auth;