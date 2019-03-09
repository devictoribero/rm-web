const EntryPointFactory = ({useCases, config}) =>
  class EntryPoint {
    constructor(params = {config: {}}) {
      // decide to use a static config from the factory
      // or use a config passed to the constructor that could be mutated
      this._config = config || params.config
      this._useCases = useCases
    }

    get(key) {
      // config key is still sync and we should return as it
      if (key === 'config') {
        return this._config
      }
      // get the useCase using the key passed by the user
      const useCase = this._useCases[key]
      // if the useCase doesn't exist, then let developer know that the useCase is not implemented
      if (typeof useCase === 'undefined') {
        return new console.warn(
          `Service ${key} is not implemented in the current version of the domain`
        )
      }
      // if the useCase is not an array
      if (useCase instanceof Array === false) {
        return useCase
      }
      // at this point, the developer is using webpack dynamic import for getting the useCases
      // get the loader and the method from the useCases
      const [loader, method] = useCase
      // if loader is undefined then is not implemented, otherwhise load async the useCase
      return loader === undefined
        ? new console.warn(
            `Service ${key} is not implemented in the current version of the domain`
          )
        : {
            execute: params => {
              // load async the factory, execute use case and return the promise
              return loader().then(factory =>
                factory.default[method]({config: this._config}).execute(params)
              )
            },
            $: {
              execute: {
                subscribe: fn => {
                  // creating an object here that will have a dispose method
                  let ret = {dispose: function() {}}
                  loader().then(factory => {
                    // black magic: mutate the object, very small memory leak but that
                    // makes dispose working async and we need it
                    ret.dispose = factory.default[method]({
                      config: this._config
                    }).$.execute.subscribe(fn).dispose
                  })
                  // return the object that will be mutated async
                  return ret
                }
              }
            }
          }
    }

    config(key, value) {
      this._config.set(key, value)
      return this
    }
  }

export default EntryPointFactory
