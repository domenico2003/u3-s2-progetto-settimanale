const inizialState = {
  actualMeteo: {
    content: null,
  },
  preferiti: {
    content: [],
  },
  oggettoSelezionato: {
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
    case "SET_PREFERITI":
      console.log("SET_PREFERITI");
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          content: [...state.preferiti.content, action.payload],
        },
      };
    case "REMOVE_PREFERITI":
      console.log("REMOVE_PREFERITI");
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          content: state.preferiti.content.filter(
            (singoloOggetto) => singoloOggetto.id !== action.payload.id
          ),
        },
      };
    case "SELECT_OBJ":
      console.log("SELECT_OBJ");
      return {
        ...state,
        oggettoSelezionato: {
          ...state.oggettoSelezionato,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
