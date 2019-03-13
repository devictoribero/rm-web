import BlogRepositoriesFactory from '../Repositories/factory'
import GetArticleListUseCase from './GetArticleListUseCase'
import GetArticlePostUseCase from './GetArticlePostUseCase'

export default class BlogUseCasesFactory {
  static getArticleListUseCase = ({config}) =>
    new GetArticleListUseCase({
      repository: BlogRepositoriesFactory.hTTPBlogRepository({config})
    })

  static getArticlePostUseCase = ({config}) =>
    new GetArticlePostUseCase({
      repository: BlogRepositoriesFactory.hTTPBlogRepository({config})
    })
}
