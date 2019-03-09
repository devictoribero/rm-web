import FirebaseBlogRepository from './FirebaseBlogRepository'

export default class BlogFactory {
  static firebaseBlogRepository = config => new FirebaseBlogRepository({config})
}
