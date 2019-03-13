import axios from 'axios'
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
    const api = await this._config.get('API_URL')

    const {data} = await axios.get(`${api}/${type}`, {
      params: {
        q: {slug}
      },
      headers: {
        'content-type': 'application/json',
        'x-apikey': '5c8954e0cac6621685acbedd',
        'cache-control': 'no-cache'
      }
    })
    return {...data[0]}
  }
}
