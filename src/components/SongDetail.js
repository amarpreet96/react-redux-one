import React from 'react';
import {connect} from 'react-redux';

const SongsDetail= ({songdetail}) =>{
    //console.log(songdetail);
    if(songdetail== null)
    {
        return <div>Please Slect a Song</div>
    }
    else{
    return (
      <div>
        <h3>SONG DETAILS :</h3>
        <p>TITLE: {songdetail.title}</p>
        <p>DURATION: {songdetail.duration}</p>
      </div>
       
     );
  }
}

const mapStateToProps =(state)=>{
    return {songdetail : state.selectedSong}
}

export default connect(mapStateToProps)(SongsDetail)