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

  useEffect(() => {
    const queryString = new URL(window.location.href.replace("#", "?"))
      .searchParams;
    const accessToken = queryString.get("access_token");
    setToken(accessToken);
  }, []);

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
          songData.map(item => {
            return(
              <CardSong
                key={item.id}
                url={item.album.images[1].url}
                title={item.name}
                artist={item.artists[0].name}
                album={item.album.name}
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
