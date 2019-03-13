import UseCase from '../../helpers/UseCase'

export default class GetArticleListUseCase extends UseCase {
  /**
   * @constructor
   * @param {Object} deps
   * @param {Object} deps.repository
   */
  constructor({repository}) {
    super()
    this._repository = repository
  }

  async execute() {
    return this._repository.getList({
      type: 'frontend'
    })
  }
}
