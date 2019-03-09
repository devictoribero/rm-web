const firebase = require('firebase')
require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyD9haZGLFUz9Qqo1kdmQ2Bdyei3LllY8Ww',
  authDomain: 'rm-web-72649.firebaseapp.com',
  projectId: 'rm-web-72649'
}

const onAuth = async () => {
  try {
    const auth = await firebase.auth().signInAnonymously()
    return auth
  } catch (error) {
    return error
  }
}

const getFirebaseApp = async () => {
  return firebase.apps.length
    ? firebase.app().firestore()
    : firebase.initializeApp(config).firestore()
}

const initFirebaseApp = async () => {
  const app = await getFirebaseApp()
  const auth = await onAuth()
  return auth ? app : null
}

// const getBlog = async () => {
//   const app = await initApp()
//   const ref = await app.collection('blog')
//   const querySnapshot = await ref.get()
//   const posts = []

//   querySnapshot.forEach(doc => posts.push(doc.data()))
//   return posts
// }

export default initFirebaseApp
