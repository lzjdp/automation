const tokenKey = 'admin-key'

export function getToken () {
  return window.localStorage.getItem(tokenKey)
}
