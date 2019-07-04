import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Orion', duration: '8:05' },
    { title: 'Santeria', duration: '3:23' },
    { title: 'Lose yourself', duration: '5:33' }
  ];
};

const selectedSongReducer = (selectedSong = null , action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

