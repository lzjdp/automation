const tokenKey = 'admin-key'

export function getToken () {
  return window.localStorage.getItem(tokenKey)
}

export function setToken (token) {
  window.localStorage.setItem(tokenKey, token)
}

export function removeToken () {
  window.localStorage.removeItem(tokenKey)
}
