import React from "react";
import { getIntegerFromMinutes } from "../../../../utils/playerUtils";

function PlayerStats({ player }) {
  return (
    <div className="player-statistics">
      <div className="player-statistics__block">
        <strong>{getIntegerFromMinutes(player.minutes_per_game)}</strong>
        <span>minutes</span>
      </div>
      <div className="player-statistics__block">
        <strong>{player.points_per_game}</strong>
        <span>points</span>
      </div>
      <div className="player-statistics__block">
        <strong>{player.field_goal_percentage}</strong>
        <span>FG%</span>
      </div>
      <div className="player-statistics__block">
        <strong>{player.assists_per_game}</strong>
        <span>assists</span>
      </div>
      <div className="player-statistics__block">
        <strong>{player.rebounds_per_game}</strong>
        <span>rebounds</span>
      </div>
      <div className="player-statistics__block">
        <strong>{player.steals_per_game}</strong>
        <span>steals</span>
      </div>
    </div>
  );
}

export default PlayerStats;
