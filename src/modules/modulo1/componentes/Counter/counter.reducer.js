import ActionTypes from './counter.actions';


const INITIAL_STATE = { step: 1, number: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.INC:
      return { ...state, number: state.number + state.step };
    case ActionTypes.DEC:
      return { ...state, number: state.number - state.step };
    case ActionTypes.STEP_CHANGED:
      return { ...state, step: +action.payload };
    default:
      return state;
  }
}
