import React from "react";
import { MDBProgress } from "mdbreact";

import "../styles/Progressbar.scss";

const ProgressBarStatus = props => {
  return (
    <>
      <MDBProgress
        material
        value={props.barValue}
        height="20px"
        className = "progressBar" 
      >
        {((props.barValue / props.limit) * 100).toFixed(0)}
      </MDBProgress>
    </>
  );
};

export default ProgressBarStatus;
