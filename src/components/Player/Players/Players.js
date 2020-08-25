import React, { useEffect, useState } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import Axios from "axios";
import { API_PLAYER_TEAMS_STATS } from "../../../constants";
import "./Players.scss";
const team = "lal";

function Players() {
  const [players, setPlayers] = useState([]);

  const getPlayersData = async () => {
    const response = await Axios(`${API_PLAYER_TEAMS_STATS}${team}`);
    const data = await response.data;

    const playersSorted = data.sort(
      (curr, next) => next.points_per_game - curr.points_per_game
    );

    setPlayers(playersSorted);
  };

  useEffect(() => {
    getPlayersData();
  }, []);

  return (
    <div className="players-container">
      <h4 className="head-text">My Team</h4>
      <div className="players-container__wrapper">
        {players && players.map((player) => <PlayerCard player={player} />)}
      </div>
    </div>
  );
}

export default Players;
