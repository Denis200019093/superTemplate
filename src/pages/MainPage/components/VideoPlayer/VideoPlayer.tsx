import React, { useState, FC } from "react";

import PlayBtn from "assets/play.svg";

import "./VideoPlayer.scss";

const VideoPlayer: FC = () => {
  const [showPlayBtn, setShowPlayBtn] = useState<boolean>(true);

  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const videoHandlers = (type: string) => {
    console.log(type);
    if (type === "play") {
      videoRef.current?.play();
      setShowPlayBtn(false);
    }
  };

  return (
    <div className="video-player-container default-sides-paddings">
      {showPlayBtn && (
        <button className="play-button" onClick={() => videoHandlers("play")}>
          <img src={PlayBtn} alt="Play" />
        </button>
      )}
      <div className="video-player-container__video">
        <video
          src={"https://www.w3schools.com/tags/mov_bbb.mp4"}
          ref={videoRef}
          controls={!showPlayBtn}
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
