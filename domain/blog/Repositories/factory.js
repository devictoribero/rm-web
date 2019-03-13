import axios from 'axios'
import HTTPBlogRepository from './HTTPBlogRepository'

export default class BlogRepositoriesFactory {
  static hTTPBlogRepository = ({config}) => {
    return new HTTPBlogRepository({
      config,
      fetcher: axios
    })
  }
}
