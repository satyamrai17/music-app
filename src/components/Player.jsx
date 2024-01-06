export const Player =({fn,song})=>{
    return (
        <div>
            <div >
            <button onClick={()=>{
                fn(true,song);
            }} className="btn btn-success mb-4">Back to Songs</button>
            <p >
            <img className="" src= {song.artworkUrl100} alt="" />
            <br />
            <br />
            {song?.artistName}  {song?.trackName}
            </p>
            <br />
            <br />
        <audio controls autoPlay>
            <source src={song?.previewUrl} type="audio/mp4" />
            Your browser does not support the audio element.
        </audio>
        </div>
        </div>
    )
}


// import { useRef, useEffect } from 'react';

// export const Player = ({ fn, song }) => {
//   const playerContainer = useRef();

// //   useEffect(() => {
// //     // Set background image on playerContainer
// //     playerContainer.current.style.backgroundImage = `url(${song.artworkUrl100})`;
// //   }, [song]);

//   return (
//     <div
//       ref={playerContainer}
//       className="player-container"
//     //   style={{
//     //     // backgroundSize: 'cover',
//     //     backgroundPosition: 'center',
//     //     // minHeight: '100vh', // Ensure the container covers the entire viewport height
//     //     display: 'flex',
//     //     flexDirection: 'column',
//     //     alignItems: 'center',
//     //     justifyContent: 'center',
//     //     // color: 'blue', // Set text color to white for better visibility
//     //     padding: '20px', // Add padding for better spacing
//     //   }}
//     >
//       <button
//         onClick={() => {
//           fn(true, song);
//         }}
//         className="btn btn-success mb-4"
//       >
//         Back to Songs
//       </button>
//       <div>
//         <img className="mb-4" src={song.artworkUrl100} alt="" style={{ width: '200px', borderRadius: '8px' }} />
//       </div>
//       <p>
//         {song?.artistName} - {song?.trackName}
//       </p>
//       <audio controls autoPlay>
//         <source src={song?.previewUrl} type="audio/mp4" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };
