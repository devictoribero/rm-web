import BlogRepositoriesFactory from '../Repositories/factory'
import GetFrontendPostUseCase from './GetFrontendPostUseCase'

export default class BlogUseCasesFactory {
  static getFrontendPostUseCase = ({config}) =>
    new GetFrontendPostUseCase({
      repository: BlogRepositoriesFactory.prismicBlogRepository({config})
    })
}
