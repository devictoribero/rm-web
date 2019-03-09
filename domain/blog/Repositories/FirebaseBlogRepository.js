import Repository from '../../helpers/Repository'

export default class FirebaseBlogRepository extends Repository {
  /**
   * @param {Object} deps
   * @param {Object} deps.config
   */
  constructor({config}) {
    super()
    this._config = config
  }

  getPost = async () => {}
}
