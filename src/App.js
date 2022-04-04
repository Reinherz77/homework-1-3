import { useEffect, useState } from 'react';
import './App.css';
import CardSong from './components/card-song';
//import data from './components/data';
//import SearchSong from './components/search-song';
import axios from 'axios';
import auth from './auth';
import PlaylistForm from './components/playlist/form-playlist';

function App() {
  const [token, setToken] = useState("");
  const [searchSong, setSearchSong] = useState("");
  const [songData, setSongData] = useState([]);
  const [selectedSong, setSelectedSong] = useState([])
  const [combineSong, setCombineSong] = useState([])
  const [userID, setUserID] = useState("")
  // const [newPlaylist, setNewPlaylist] = useState({
  //   title: '',
  //   desc: '',
  // })

  useEffect(() => {
    const queryString = new URL(window.location.href.replace("#", "?"))
      .searchParams;
    const accessToken = queryString.get("access_token");
    const getUserId = () => {
      axios
        .get(`https://api.spotify.com/v1/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setUserID(response.data.id);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUserId();
    setToken(accessToken);
  }, []);

  useEffect(() => {
    const handleCombineSong = songData.map((song) => ({
      ...song, 
      isSelected: selectedSong.find((data) => data === song.uri),
    }))
    setCombineSong(handleCombineSong)
  }, [songData, selectedSong])

  const getSong = async () => {
    await axios
      .get(
        `https://api.spotify.com/v1/search?q=${searchSong}&type=track&access_token=${token}`
      )
      .then((response) => {
        setSongData(response.data.tracks.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSelect = (uri) => {
    const selected = selectedSong.find((song) => song === uri)
    selected
    ? setSelectedSong(selectedSong.filter((song) => song !== uri))
    : setSelectedSong([...selectedSong, uri])
  }

  return (
    <div className="App">
      <div className='Container'>
        <div className='SongCard'>
          <div className='Search'>
            <button onClick={auth}>Login</button>
            <input type="search" placeholder='search' onChange={(e) => setSearchSong(e.target.value)} />
            <button onClick={getSong}>Search</button>
          </div>
          {
          combineSong.map(item => {
            const {uri , isSelected} = item
            return(
              <CardSong
                key={uri}
                uri={uri}
                url={item.album.images[1].url}
                title={item.name}
                artist={item.artists[0].name}
                album={item.album.name}
                selectState={handleSelect}
                isSelected={isSelected}
              />
            )
          })
        }
        <div>
          <PlaylistForm/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
