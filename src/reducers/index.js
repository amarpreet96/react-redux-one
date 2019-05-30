import {combineReducers} from 'redux';

const songsReducer = ()=>{ // containing array of objects having songs name
    return [               // hardcoded reducer
        {title: 'alaadin' , duration : "1:00"},
        {title: 'dark world' , duration : "2:00"},
        {title: 'iam iron man' , duration : "7:00"}
    ];
};

const selectedSongReducer = (selectedSong=null,action)=> {  //action are used to modify data in reducer
                                                            // action creator is function returning action

   if( action.type === 'SONG_SELECTED' ) {
            return action.payload;
   }
   
   return selectedSong;
};

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});