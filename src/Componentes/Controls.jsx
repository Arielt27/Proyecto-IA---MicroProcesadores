import React, { useState } from 'react';

function MusicControls(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayClick = () => {
    setIsPlaying(true);
    props.onPlay();
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
    props.onPause();
  };

  const handleStopClick = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    props.onStop();
  };

  const handleForwardClick = () => {
    setCurrentTime(currentTime + 10);
    props.onForward(10);
  };

  const handleBackwardClick = () => {
    setCurrentTime(currentTime - 10);
    props.onBackward(10);
  };

  return (
    <div>
      <button onClick={handleBackwardClick}>Backward</button>
      {isPlaying ? (
        <button onClick={handlePauseClick}>Pause</button>
      ) : (
        <button onClick={handlePlayClick}>Play</button>
      )}
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handleForwardClick}>Forward</button>
      {/*<div>Current time: {currentTime}</div>*/}
    </div>
  );
}

export default MusicControls;