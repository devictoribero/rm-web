import PrismicBlogRepository from './PrismicBlogRepository'

export default class BlogRepositoriesFactory {
  static prismicBlogRepository = ({config}) =>
    new PrismicBlogRepository({config})
}
