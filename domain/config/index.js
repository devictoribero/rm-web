console.log('\n\nENV:', process.env.NODE_ENV, '\n\n')
console.log('\n\n Internal:', !!process.env.INTERNAL, '\n\n')

const API_RESTDB = {
  url: 'https://rmweb-c213.restdb.io/rest',
  headers: {
    'content-type': 'application/json',
    'x-apikey': '5c8954e0cac6621685acbedd',
    'cache-control': 'no-cache'
  }
}
export default class Config {
  /**
   * @constructor
   */
  constructor() {
    this._config = {
      API_RESTDB
    }
  }

  /**
   * @method
   * @param {String} key
   * @return {*}
   */
  get(key) {
    return this._config[key]
  }

  /**
   * @method
   * @param {String} key
   * @param {*} value
   * @return {*}
   */
  set(key, value) {
    this._config[key] = value
    return this
  }
}
