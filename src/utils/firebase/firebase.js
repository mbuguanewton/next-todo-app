import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MSG_SENDER_ID,
    appId: process.env.APP_ID,
}

if (typeof window !== undefined && !firebase.apps.length) {
    firebase.initializeApp(config)
}

export { firebase }
