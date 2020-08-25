import React, { useState } from "react";
import classNames from "classnames";
import PlayerStats from "./PlayerStats/PlayerStats";
import { getPlayerImageUrl } from "../../../utils/playerUtils";
import { PROFILE_IMAGE_FALLBACK } from "../../../constants";
import "./playerCard.scss";

function PlayerCard({ player }) {
  const [name, last_name] = player.name.toLowerCase().split(" ");
  const [image, setImage] = useState(getPlayerImageUrl(name, last_name));
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImage(PROFILE_IMAGE_FALLBACK);
    setImageError(true);
  };

  const imageClasses = classNames("player-card__image", {
    "has-error": imageError,
  });

  const plusOrMinus = Math.random() < 0.5 ? -1 : 1;

  return (
    <div className="player-card">
      <div className={imageClasses}>
        <img src={image} onError={handleImageError} alt="" />
        <div
          className="overlay"
          style={{
            backgroundPosition: `${
              Math.floor(Math.random() * 100) + 1
            }% center`,
            transform: `scaleX(${plusOrMinus})`,
          }}
        ></div>
      </div>
      <div className="player-card__info">
        <strong>{player.name}</strong>
        <p>{player.team_name}</p>
      </div>
      <PlayerStats player={player} />
    </div>
  );
}

export default PlayerCard;
