import React from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import "./styles.css";

function Grid({ coin }) {
  return (
    <div className="grid-box">
      <div className="info-flex">
        <img src={coin.image} alt="coinimg"/>
        <p>{coin.name}</p>
      </div>
      
    </div>
  );
}

export default Grid;