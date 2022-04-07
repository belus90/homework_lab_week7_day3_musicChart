import React from "react";
import "./MusicItems.css";


const MusicItem = ({song, index}) => {
    return (
        <div>
            <ul class = "p">
                <p> Position # {index + 1}</p>
            <p>{song["im:artist"].label}</p>
            <p>{song.title.label}</p> 
            <p>{song.id.label}</p>
            <img src= {song["im:image"][0].label} alt="" />
            <br></br>
            </ul>
        </div>
    )
}

export default MusicItem;