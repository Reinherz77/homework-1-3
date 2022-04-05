function PlaylistCard (props){
    return (
        <div className="playlist-card">
            <img src={props.url} alt="" />
            <div className="song-component">
                <p>{props.albumName}</p>
                <p>{props.artistName}</p>
            </div>
        </div>
    )
}

export default PlaylistCard