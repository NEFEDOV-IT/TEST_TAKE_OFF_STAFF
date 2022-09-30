export const AUTH_ID = 'id'
export const AUTH_EMAIL = 'email'
export const USERS_DATA = 'usersData'

export const saveStorage = (name, id) => {
  return localStorage.setItem(name, JSON.stringify(id))
}

export const getStorage = (name) => {
  return JSON.parse(localStorage.getItem(name))
}

export const removeStorage = (name) => {
  localStorage.removeItem(name)
}