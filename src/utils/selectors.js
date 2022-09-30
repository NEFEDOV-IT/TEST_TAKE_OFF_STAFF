export const getUser = state => state.auth;
export const getUsers = state => {
  const users = state.users.users
  const searchValue = state.users.searchValue

  if (!searchValue) {
    return users;
  }
  return users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));
}