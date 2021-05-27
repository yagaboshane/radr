import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import "./styles.css";

import Map from "./Map";

function MapHolder() {
  const [content, setContent] = useState("");
  return (
    <div className="pv3">
      <div>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
}

export default MapHolder;