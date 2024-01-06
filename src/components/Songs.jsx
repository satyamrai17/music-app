
import { Song } from "./Song";

export const Songs = ({ fn, allsongs }) => {
  return (
    <div className="container mt-4">
      {allsongs.map((currentSong, index) => (
        <div key={index} className="mb-3"> 
          <Song fn={fn} song={currentSong} />
        </div>
      ))}
    </div>
  );
};
