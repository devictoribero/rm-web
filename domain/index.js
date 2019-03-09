import EntryPointFactory from './helpers/EntryPointFactory'
import config from './config'
import BlogFactory from './blog/UseCases/factory'

const useCases = {
  get_post_use_case: BlogFactory.getPostUseCase()
}

const EntryPoint = EntryPointFactory({useCases, config})
const domain = new EntryPoint()

export default domain
