const defaultState = {
  numberGuess: Math.floor(Math.random() * 1000 + 1),
  guessCount: 1,
  guessStatus: null,
};

const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GUESS": {
      if (action.payload === state.numberGuess)
        return {
          ...state,
          guessStatus: 0,
        };
      if (action.payload > state.numberGuess)
        return {
          ...state,
          guessCount: state.guessCount + 1,
          guessStatus: 1,
        };
      if (action.payload < state.numberGuess)
        return {
          ...state,
          guessCount: state.guessCount + 1,
          guessStatus: -1,
        };
      return state;
    }
    case "RESTART":
      return {
        numberGuess: Math.floor(Math.random() * 1000 + 1),
        guessCount: 1,
        guessStatus: null,
      };
    default:
      return state;
  }
};

export default gameReducer;