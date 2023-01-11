let Initstate = {
  name: "",
};

function UserReducer(state = Initstate, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "login": {
      return {
        ...state,
        name: action.name,
      };
    }
    case "logout": {
      return null;
    }
    default:
      return state;
  }
}

export default UserReducer;
