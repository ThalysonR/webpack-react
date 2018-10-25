const Types = {
  INC: 'modulo1/counter/INC',
  DEC: 'modulo1/counter/DEC',
  INC_ASYNC: 'modulo1/counter/INC_ASYNC',
  STEP_CHANGED: 'modulo1/counter/STEP_CHANGED',
};

export default Types;

export function inc() {
  return { type: Types.INC };
}

export function dec() {
  return { type: Types.DEC };
}

export function incAsync() {
  return { type: Types.INC_ASYNC };
}
export function stepChanged(e) {
  return {
    type: Types.STEP_CHANGED,
    payload: e.target.value,
  };
}
