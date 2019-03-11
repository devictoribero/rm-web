var Prismic = require('prismic-javascript')
// import isNode from './isNode'

const apiEndpoint = 'https://rm-web.cdn.prismic.io/api/v2'
const accessToken =
  'MC5YRzNKZ2hVQUFDa0FFLXZn.Xlp777-9U33vv71t77-977-9HjJ-dz0TXXbvv73vv73vv714bDoy77-977-9Su-_vQDvv71_'

const getApi = req =>
  Prismic.getApi(apiEndpoint, {
    accessToken,
    req: req
  })

export default getApi()
