import prismicApi from './prismic'
console.log('\n\nENV:', process.env.NODE_ENV, '\n\n')
console.log('\n\n Internal:', !!process.env.INTERNAL, '\n\n')

export default class Config {
  /**
   * @constructor
   */
  constructor() {
    this._config = {
      prismicApi
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
