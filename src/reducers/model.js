const modelReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD":
      state.push(action.payload);
      return state;
    default:
      return state;
  }
};

export default modelReducer;
