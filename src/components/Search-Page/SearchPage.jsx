import { useEffect, useState } from 'react';
import CardSong from '../card-song/card-song'
//import data from './components/data';
//import SearchSong from './components/search-song';
import axios from 'axios';
// import auth from './auth';
import auth from '../../auth/auth'
import PlaylistForm from '../playlist/form-playlist'
import PlaylistCard from '../playlist/card-playlist'

const SearchingPage = () => {
    const [token, setToken] = useState("");
    const [searchSong, setSearchSong] = useState("");
    const [songData, setSongData] = useState([]);
    const [selectedSong, setSelectedSong] = useState([])
    const [combineSong, setCombineSong] = useState([])
    const [userID, setUserID] = useState("")
    const [newPlaylist, setNewPlaylist] = useState({
        title: '',
        desc: '',
        viewPlaylist: [],
    })
    const [check, setCheck] = useState({
        emptyView: true,
        playlistId: "",
    });
    const access_token = new URLSearchParams(window.location.hash).get("#access_token")
    const BASEURL = `https://api.spotify.com/v1`

    let userid = ""
    let playlistId = ""
    let newPlaylistId = ""


    const getUserID = async () => {
        try {
            let user = await axios.get(`${BASEURL}/me`, {
                headers: {
                    Authorization : "Bearer " + access_token,
                    "Content-Type": "application/json",
                }
            })
            console.log(user.data.id)
            userid = user.data.id
        } catch (error) {
            console.log(error)
        }
    }

  const createPlaylist = async () => {
    try {
      let create = await axios.post(
        `${BASEURL}/users/${userid}/playlists`,
        {
          name: newPlaylist.title,
          description: newPlaylist.description,
          public: false,
          collaborative: false,
        },
        {
          headers: {
            Authorization: "Bearer " + access_token,
            "Content-Type": "application/json",
          },
        }
      )
      console.log(create.data)
      playlistId = create.data.uri
      setCheck({
        playlistId: create.data.uri,
      })
    } catch (error) {
      console.log(error)
    }
  };

  const addSongToPlaylist = async () => {
    try {
      await axios.post(
        `${BASEURL}/playlists/${newPlaylistId}/tracks`,
        {
          uris: selectedSong,
          position: 0,
        },
        {
          headers: {
            Authorization: "Bearer " + access_token,
            "Content-Type": "application/json",
          },
        }
      )
    } catch (error) {
      console.log(error);
    }
  }

  const viewPlaylist = async () => {
    try {
      let view = await axios.get(`${BASEURL}/playlists/${newPlaylistId}`, {
        headers: {
          Authorization: "Bearer " + access_token,
          "Content-Type": "application/json",
        },
      })
      console.log(view.data);
      setNewPlaylist({
        viewPlaylist: view.data,
      })
    } catch (error) {
      console.log(error);
    }
  }

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

  const handleForm = (event) => {
    const {name , value} = event.target
    setNewPlaylist({...newPlaylist, [name]: value})
  }

  const handlePlaylist = async (event) => {
    event.preventDefault()
    console.log(access_token)
    await getUserID()
    console.log("Create Playlist")
    await createPlaylist()
    newPlaylistId = playlistId.replace("spotify:playlist:","")
    await addSongToPlaylist()
    console.log(playlistId)
  }

  const handleView = (event) => {
    event.preventDefault();
    newPlaylistId = check.playlistId.replace("spotify:playlist:", "");
    viewPlaylist();
    setCheck({
      emptyView: false
    })
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
        <div className='playlist-form'>
          <div className='create-form'>
            <PlaylistForm
              onCreate={handlePlaylist}
              handleChangeTitle={handleForm}
              handleChangeDesc={handleForm}
            />
          </div>
        </div>
        <div className='viewPlaylist'>
          <button type='submit' onClick={handleView}>View Playlist</button>
        </div>
        <div>
          <div>
            <p>{newPlaylist?.viewPlaylist.name}</p>
            {check.emptyView ? (
              <p>No Playlist</p>
            ) : (
              newPlaylist?.viewPlaylist?.tracks?.items?.map((item) => {

                return (
                  <PlaylistCard
                    url={item.track.album.images[0].url}
                    alt="Not loaded"
                    albumName={item.track.album.name}
                    artistName={item.track.artists[0].name}
                    key={item.track.uri}
                  />
                );
              })
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SearchingPage