import React from "react";
import "./MusicItems.css";


const MusicItem = ({song}) => {
    return (
        <div>
            <ul>
            <p class = "p">{song.title.label}</p> 
            <br></br>
            </ul>
        </div>
    )
}

export default MusicItem;