import data from "../../album";

const CoverAPI = props => {
    return <img src={data.album.images[1].url} alt=''></img>
}

export default CoverAPI