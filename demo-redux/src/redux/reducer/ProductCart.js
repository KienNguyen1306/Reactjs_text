let Initstate = {
  qly: 0,
};

function UserReducer(state = Initstate, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "app": {
      return {
        qly: state.qly + 1,
      };
    }
    case "remove": {
      return {
        qly: state.qly - 1,
      };
    }
    default:
      return state;
  }
}

export default UserReducer;
