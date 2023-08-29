// reducer.js
import { CHANGE_STEP, TURN_DEGREES,TURN_DEG,MOVING_DIR,SHOW_MSG } from "../Actions/actions";

const initialState = {
  currentStep: 0,
  motionType: "CHANGE_STEP", // Default to CHANGE_STEP
  direction:'',
  message:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STEP:
      return {
        ...state,
        
        currentStep: state.currentStep + parseInt(action.payload, 10),
        motionType: "CHANGE_STEP",
      };
    case TURN_DEGREES:
      return {
        ...state,
       
        currentStep: state.currentStep + parseInt(action.payload, 10),
        motionType: "TURN_DEGREES",
      };
    case TURN_DEG:
      return {
        ...state,
       
        currentStep: state.currentStep - parseInt(action.payload, 10),
        motionType: "TURN_DEGREES",
      };
    case MOVING_DIR:
      return {
        ...state,
       
        direction: action.payload,
        motionType: "TURN_DEGREES",
      };


  // looks section


    case SHOW_MSG:
      return {
        ...state,
        currentStep:parseInt(2, 10),
        message: action.payload,
        motionType: "SHOW_MSG",
      };
    default:
      return state;
  }
};

export default reducer;
