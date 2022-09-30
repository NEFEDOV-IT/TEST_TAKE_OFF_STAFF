export const getUser = state => state.auth;
export const getUsers = state => {
  const { users, searchValue } = state.users

  if (!searchValue) {
    return users;
  }
  return users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));
}