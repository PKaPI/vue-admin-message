
const localDb = {
  set(key, value) {
    const val = typeof value === 'object' ?
    JSON.stringify(value) : value
    window.localStorage[key] = val
  },

  get(key) {
      const str = window.localStorage[key] || ''
      return this.isJSONStr(str) ? JSON.parse(str) : str
  },

  isJSONStr(str) {
      return (
          (str.charAt(0) === '{' && str.charAt(str.length - 1) === '}') ||
          (str.charAt(0) === '[' && str.charAt(str.length - 1) === ']')
      )
  },
  clear() {
      window.localStorage.clear()
  }
}

export default localDb;
