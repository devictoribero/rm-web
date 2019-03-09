import GetPostUseCase from './GetPostUseCase'

export default class BlogFactory {
  static getPostUseCase = () => new GetPostUseCase()
}
