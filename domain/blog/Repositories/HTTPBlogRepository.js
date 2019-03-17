import Repository from '../../helpers/Repository'

export default class PrismicBlogRepository extends Repository {
  /**
   * @param {Object} deps
   * @param {Object} deps.config
   * @param {Object} deps.fetcher
   */
  constructor({config, fetcher}) {
    super()
    this._config = config
    this._fetcher = fetcher
  }

  getList = async ({type}) => {
    const {url, headers} = await this._config.get('API_RESTDB')

    const {data} = await this._fetcher.get(`${url}/${type}`, {
      params: {
        h: {
          $orderby: {
            updatedDate: -1
          }
        }
      },
      headers
    })

    return {...data}
  }

  getPost = async ({type, slug}) => {
    const {url, headers} = await this._config.get('API_RESTDB')

    const {data} = await this._fetcher.get(`${url}/${type}`, {
      params: {
        q: {slug}
      },
      headers
    })
    return {...data[0]}
  }
}
