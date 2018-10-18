export default {
  inc() {
    return { type: 'INC' };
  },
  dec() {
    return { type: 'DEC' };
  },
  incAsync() {
    return { type: 'INC_ASYNC' };
  },
  stepChanged(e) {
    return {
      type: 'STEP_CHANGED',
      payload: e.target.value,
    };
  },
};
