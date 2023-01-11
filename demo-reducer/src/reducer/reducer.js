const myreducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "login":
      let user = {
        name: action.name,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        name: action.name,
      };
    case "logout":
      localStorage.removeItem("user");
      return null;
  }
};

export default myreducer;
