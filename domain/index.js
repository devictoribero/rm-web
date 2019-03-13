import EntryPointFactory from './helpers/EntryPointFactory'
import Config from './config'

const importBlogUseCasesFactory = () =>
  import(/* webpackChunkName: "BlogUseCasesFactory" */ './blog/UseCases/factory')

const useCases = {
  get_article_post_use_case: [
    importBlogUseCasesFactory,
    'getArticlePostUseCase'
  ]
}

const config = new Config()

const EntryPoint = EntryPointFactory({config, useCases})
const domain = new EntryPoint()

export default domain
