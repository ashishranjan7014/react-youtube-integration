import React, { useState } from 'react';
import './style.css';
import Mobile from './Mobile';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mute, setMute] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    setMute(!mute);
  };

  return (
    <div>
      <Mobile />
      {/* <iframe
        width="684"
        height="385"
        src={`https://www.youtube.com/embed/ycouT7JuZhs/?enablejsapi=1&html5=1&autoplay=${isPlaying}&mute=${mute}`}
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleMuteUnmute}>{mute ? 'Unmute' : 'Mute'}</button> */}
    </div>
  );
}
