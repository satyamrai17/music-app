
import { useRef } from 'react';

export const Search = ({ fn }) => {
  const artist = useRef();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fn(artist.current.value);
    }
  };

  return (
    <>
      <label>Artist Name</label>
      <input
        ref={artist}
        type='text'
        className="form-control"
        placeholder="Search artist-wise song"
        onKeyDown={handleKeyPress}
      />
      <button
        className="btn btn-success"
        onClick={() => {
          fn(artist.current.value);
        }}
      >
        Search it
      </button>
    </>
  );
};
