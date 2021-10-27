const tokenKey = 'admin-key'

export function getToken () {
  return window.localStorage.getItem(tokenKey)
}

export function setToken (token) {
  return window.localStorage.setItem(tokenKey, token)
}
