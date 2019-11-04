import gameslist, { SETGAMES } from '../action/gameslist';
const initialstate = {
  loadedGames: []
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case SETGAMES:
      return {
        loadedGames: action.Games
      };
    default:
      return state;
  }
};
