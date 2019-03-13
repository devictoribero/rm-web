import HTTPBlogRepository from './HTTPBlogRepository'

export default class BlogRepositoriesFactory {
  static hTTPBlogRepository = ({config}) => new HTTPBlogRepository({config})
}
