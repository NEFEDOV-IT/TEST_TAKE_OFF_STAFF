export const AUTH_ID = 'id'
export const AUTH_EMAIL = 'email'

export const saveAuthStorage = (name, id) => {
  return localStorage.setItem(name, JSON.stringify(id))
}

export const getAuthStorage = (name) => {
  return JSON.parse(localStorage.getItem(name))
}