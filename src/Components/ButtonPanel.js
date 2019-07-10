import React from "react";
import PropTypes from "prop-types";
import { MDBBtn, MDBBtnGroup } from "mdbreact";

const ButtonPanel = props => {
  return (
    <MDBBtnGroup>
      {props.buttonLabel.map(buttonLabel => {
        return (
          <MDBBtn
            color="info"
            size="lg"
            onClick={e => props.changeBars(buttonLabel)}
          >
            {buttonLabel}
          </MDBBtn>
        );
      })}
    </MDBBtnGroup>
  );
};
ButtonPanel.propTypes = {
  buttonLabel: PropTypes.array.isRequired
};
export default ButtonPanel;
