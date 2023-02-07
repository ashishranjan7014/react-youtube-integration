import React, { useState, useEffect } from 'react';

const Mobile = () => {
  const [player, setPlayer] = useState(null);
  const [iframeData, setIframeData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mute, setMute] = useState(true);
  const [vol, setVol] = useState(10);
  const [liveColor, setLiveColor] = useState('red');

  const loadScript = async () => {
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  const onPlayerReady = (event) => {
    let player = event.target;
    player.mute();
    player.playVideo();
    player.hideVideoInfo();
    player.setVolume(10);
    setPlayer(player);
    setIsPlaying(true);
    setMute(true);
    setVol(10);
    setLiveColor('red');
  };

  const onPlayerStateChange = (event) => {
    console.log({ event });
  };

  const onYouTubeIframeAPIReady = async () => {
    setIframeData(
      await new YT.Player('playerFrame', {
        width: '100%',
        videoId: 'Nq2wYlWFucg',
        playerVars: {
          autoplay: 1,
          playsinline: 1,
          controls: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    );
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
    setLiveColor('black');
  };

  const handleMuteUnmute = () => {
    if (mute) {
      player.unMute();
    } else {
      player.mute();
    }
    setMute(!mute);
  };

  const handleStop = () => {
    player.stopVideo();
    setIsPlaying(false);
    setLiveColor('black');
  };

  const handleVolume = (e) => {
    player.setVolume(e.target.value);
    setVol(e.target.value);
  };

  const handleLive = () => {
    // player.seekTo(Math.floor(Date.now() / 1000) - 10);
    player.seekTo();
    setLiveColor('red');
    setIsPlaying(true);
    console.log(Math.floor(Date.now() / 1000));
  };

  useEffect(() => {
    loadScript();
    setTimeout(() => {
      onYouTubeIframeAPIReady();
    }, 2000);
  }, []);

  // console.log({ player });

  return (
    <div>
      <div className="iframe-container">
        <div id="playerFrame"></div>
      </div>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleMuteUnmute}>{mute ? 'Unmute' : 'Mute'}</button>
      <button onClick={handleStop}>{'Stop'}</button>
      <input
        type="range"
        min={0}
        max={100}
        value={vol}
        onChange={handleVolume}
      />
      <button
        style={{
          color: liveColor,
        }}
        onClick={handleLive}
      >
        {'Live'}
      </button>
    </div>
  );
};
export default Mobile;
