import data from '../../album'

const ArtistAPI = props => {
    return <p>{data.album.artists[0].name}</p>
}

export default ArtistAPI