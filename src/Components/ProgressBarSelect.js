import React from "react";

import "../styles/Selectbar.scss";

const ProgressBarSelect = props => {
  return (
    <div className="select-bar-div">
      <select
        className="browser-default custom-select"
        onChange={e => props.setCurrentProgressBar(e.target.value)}
      >
        <option>Choose your option</option>
        {props.barsList.map((barName, index) => {
          return <option value={index + 1}>ProgressBar {index + 1}</option>;
        })}
      </select>
    </div>
  );
};

export default ProgressBarSelect;
