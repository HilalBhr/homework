import axios from 'axios';

export default function UserAction() {
  return (dispatch) => {
    dispatch({
      type: 'GET_USER',
      payload: axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.data),
    });
  };
}
// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((res) => res.data)
//   .then((data) => dispatch({ type: FETCHED_USERS, payload: data }))
//   .catch((err) => dispatch({ type: FETCHED_USERS_ERROR, payload: err }));
