import Game from '../../models/games';
export const SETGAMES = 'SETGAMES'; //fetch all the games from firebase

//fetch all the games from firebase
export const fetchgames = () => {
  return async dispatch => {
    const response = await fetch(
      'https://gaming-application-dba5c.firebaseio.com/games.json'
    );
    const resData = await response.json();
    console.log(resData);

    const loadedGames = [];
    for (const key in resData) {
      loadedGames.push(
        new Game(
          key,
          resData[key].title,
          resData[key].gameid,
          resData[key].price,
          resData[key].purchase
        )
      );
    }

    dispatch({ type: SETGAMES, Games: loadedGames });
  };
};
