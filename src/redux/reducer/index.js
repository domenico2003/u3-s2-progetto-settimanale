const inizialState = {
  actualMeteo: {
    content: null,
  },
};

const mainReducer = (state = inizialState, action) => {
  switch (action.type) {
    case "SET_ACTUAL_METEO":
      return {
        ...state,
        actualMeteo: {
          ...state.actualMeteo,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
