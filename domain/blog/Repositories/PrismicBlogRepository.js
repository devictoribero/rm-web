import Repository from '../../helpers/Repository'

export default class PrismicBlogRepository extends Repository {
  /**
   * @param {Object} deps
   * @param {Object} deps.config
   */
  constructor({config}) {
    super()
    this._config = config
  }

  getPost = async ({type, slug}) => {
    const api = await this._config.get('prismicApi')
    const document = await api.getByUID(type, slug)
    return document
  }
}
