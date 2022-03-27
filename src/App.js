import './App.css';
import CardSong from './components/card-song';
import data from './components/data';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <div className='SongCard'>
          {
          data.map(item => {
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
