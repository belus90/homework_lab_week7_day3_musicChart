import React, { useEffect, useState } from 'react';
import MusicList from '../components/MusicList';
import '../components/MusicItems.css';

const MusicBox = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [] );

    const getSongs = function (){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        // .then(song=> console.log(song))
        .then(songs => setSongs(songs.feed.entry));
    }
    return(
        <div class = "song-title">
            <MusicList songs = {songs}/>
        </div>
    )
}


export default MusicBox;