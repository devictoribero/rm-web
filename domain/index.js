import EntryPointFactory from './helpers/EntryPointFactory'
import Config from './config'

const importBlogUseCasesFactory = () =>
  import(/* webpackChunkName: "BlogUseCasesFactory" */ './blog/UseCases/factory')

const useCases = {
  get_frontend_post_use_case: [
    importBlogUseCasesFactory,
    'getFrontendPostUseCase'
  ]
}

const config = new Config()

const EntryPoint = EntryPointFactory({config, useCases})
const domain = new EntryPoint()

export default domain
