import { addUsers } from "../users.slice/users.slice";

export const fetchUsers = () => {
  return dispatch => {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(addUsers(data)))
    } catch (e) {
      alert(e)
    }
  }
}