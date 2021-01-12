import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAT2L9D79L56z5ENc9OOnHGyqpL83506Ko',
  authDomain: 'papowsky-shop.firebaseapp.com',
  projectId: 'papowsky-shop',
  storageBucket: 'papowsky-shop.appspot.com',
  messagingSenderId: '574871847375',
  appId: '1:574871847375:web:d6040db47eaa7ad6d452ba',
  measurementId: 'G-E0L58HQRLT',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = Date.now()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
