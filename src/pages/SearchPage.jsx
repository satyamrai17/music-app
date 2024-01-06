import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs"
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";


export const SearchPage=()=>{
    const [allsongs, setSongs]=useState([]);
    const [flag ,setFlag]= useState(false);
    const [song, setPlayerSong]=useState(null);
   
    //component life cycle
    const loadSongs = async ()=>{
        setSongs( await getSongs('Latest Song'));
    }
    useEffect(()=>{
        loadSongs();
    },[])

    const togglePlayer= (flag,songarg)=>{
        setFlag(!flag)
        setPlayerSong(songarg);
        
    }


    const getArtistName=async (artistName)=>{
        // console.log('Rec Artist Name', artistName);
        setSongs(await getSongs(artistName));
    }
    const jsx =<>
    <Search fn={getArtistName} />
    <Songs fn={togglePlayer} allsongs ={allsongs} />
    </>
    return(
        <div className="container">
            <h1 className="alert alert-info text-center">Music store</h1>

        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
       
        </div>
    )
}