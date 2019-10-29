export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0DJ6WKIcvdh5Su1KIFxdUKAUJ8TvubWU ',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      }
    );
    if (!response.ok) {
      const errResData = await response.json();

      const errID = errResData.error.message;
      let message = 'Something went wrong';
      if (errID === 'EMAIL_EXISTS') {
        message = 'This Email already exists';
      }
      throw new Error(message);
    }
    const resData = await response.json();
    console.log(resData);
    dispatch({
      type: 'SIGNUP',
      token: resData.idToken,
      userId: resData.localId
    });
  };
};
export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0DJ6WKIcvdh5Su1KIFxdUKAUJ8TvubWU ',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      }
    );
    if (!response.ok) {
      const errResData = await response.json();

      const errID = errResData.error.message;
      let message = 'Something went wrong';
      if (errID === 'EMAIL_NOT_FOUND') {
        message = 'This Email could not be found';
      } else if (errID === 'INVALID_PASSWORD') {
        message = 'This Password is not valid';
      }
      throw new Error(message);
    }
    const resData = await response.json();
    console.log(resData);
    dispatch({
      type: 'LOGIN',
      token: resData.idToken,
      userId: resData.localId
    });
  };
};
