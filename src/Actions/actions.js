// actions.js
export const CHANGE_STEP = "CHANGE_STEP";
export const TURN_DEGREES = "TURN_DEGREES"; 
export const TURN_DEG = "TURN_DEG"; 
export const  MOVING_DIR = "MOVING_DIR"; 
// looks section
export const  SHOW_MSG = "SHOW_MSG"; 


export const changeStep = (steps) => ({
  type: CHANGE_STEP,
  payload: steps,

});

export const turnDegrees = (degrees) => ({
    type: TURN_DEGREES,
    payload: degrees,
  });

export const turnDeg = (degrees) => ({
    type: TURN_DEG,
    payload: degrees,
  });
export const directionToMove = (direction) => ({
    type: MOVING_DIR,
    payload: direction,
  });

  // looks section
export const showMessage = (message) => ({
    type: SHOW_MSG,
    payload: message,
    
  });
