interface IFirebaseConfig {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}

const firebaseConfig: IFirebaseConfig = {

    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: "dev-nogarbage.firebaseapp.com",
    projectId: "dev-nogarbage",
    storageBucket: "dev-nogarbage.appspot.com",
    messagingSenderId: "107165234014",
    appId: "1:107165234014:web:aa26a97fc87ebc2ba995cf",
    measurementId: "G-99WYTTK4GN"

};

export {
    firebaseConfig
}