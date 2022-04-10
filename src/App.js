// import { useEffect, useState } from 'react';
import './App.css';
// import CardSong from './components/card-song';
//import data from './components/data';
//import SearchSong from './components/search-song';
// import axios from 'axios';
// import auth from './auth';
// import PlaylistForm from './components/playlist/form-playlist';
// import PlaylistCard from './components/playlist/card-playlist';
// import SearchingPage from './components/Search-Page/SearchPage';
import { Provider } from "react-redux"
import store from './redux/store';
import RouterApp from './Router/Router-App';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RouterApp />
      </div>
    </Provider>
  )
}

export default App;
