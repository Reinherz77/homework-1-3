import { useEffect, useState } from 'react';
import './App.css';
import CardSong from './components/card-song';
//import data from './components/data';
//import SearchSong from './components/search-song';
import axios from 'axios';
import auth from './auth';

function App() {
  const [token, setToken] = useState("");
  const [searchSong, setSearchSong] = useState("");
  const [songData, setSongData] = useState([]);
  const [selectedSong, setSelectedSong] = useState([])
  const [combineSong, setCombineSong] = useState([])

  useEffect(() => {
    const queryString = new URL(window.location.href.replace("#", "?"))
      .searchParams;
    const accessToken = queryString.get("access_token");
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
            const {uri , name , artist , album , isSelected} = item
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
        </div>
      </div>
    </div>
  );
}

export default App;
