import BlogRepositoriesFactory from '../Repositories/factory'
import GetArticlePostUseCase from './GetArticlePostUseCase'

export default class BlogUseCasesFactory {
  static getArticlePostUseCase = ({config}) =>
    new GetArticlePostUseCase({
      repository: BlogRepositoriesFactory.hTTPBlogRepository({config})
    })
}
