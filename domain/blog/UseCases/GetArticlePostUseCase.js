import UseCase from '../../helpers/UseCase'

export default class GetArticlePostUseCase extends UseCase {
  /**
   * @constructor
   * @param {Object} deps
   * @param {Object} deps.repository
   */
  constructor({repository}) {
    super()
    this._repository = repository
  }

  async execute({slug}) {
    return this._repository.getPost({
      type: 'frontend',
      slug
    })
  }
}
