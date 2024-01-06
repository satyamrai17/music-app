
export const Song =({fn,song})=>{

    
    const showPlayer=()=>{
        fn(false, song);
       
    }
    return (<div className="row">
        <div className="col-4">
            <img src= {song.artworkUrl100} alt="" />
        </div>
        <div className="col-4">
            {song.artistName}
            {song.trackName}
        </div>
        <div className="col-4">
            <button  onClick={()=>{
            showPlayer();
        }} className="btn btn-primary">Play song</button>
        </div>
        </div>
        )
}