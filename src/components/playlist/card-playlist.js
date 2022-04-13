import './card-playlist.css'

function PlaylistCard (props){
    return (
        <div className='box-playlist-card'>
            <div className="playlist-card">
                <img src={props.url} alt="" />
                <div className="song-component">
                    <p>{props.artistName}</p>
                    <p className='title-song-playlist'>{props.albumName}</p>
                </div>
            </div>
        </div>
        
    )
}

export default PlaylistCard