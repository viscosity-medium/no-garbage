import {systemVariables} from "../system/system";

interface IFirebaseConfig {
    apiKey: string
    authDomain: string
    projectId: string
    databaseURL: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
}

const {
    //firebase prod values
    firebaseProdApiKey,
    firebaseProdProjectId,
    firebaseProdAppId,
    firebaseProdMessagingSenderId,
    firebaseProdMeasurementId,
    
    //firebase dev values
    firebaseDevApiKey,
    firebaseDevProjectId,
    firebaseDevAppId,
    firebaseDevMessagingSenderId,
    firebaseDevMeasurementId
} = systemVariables;

const firebaseProdConfig: IFirebaseConfig = {
    apiKey: firebaseProdApiKey,
    authDomain: `${firebaseProdProjectId}.firebaseapp.com`,
    databaseURL: `https://${firebaseProdProjectId}-default-rtdb.europe-west1.firebasedatabase.app`,
    projectId: firebaseProdProjectId,
    storageBucket: `${firebaseProdProjectId}.appspot.com`,
    messagingSenderId: firebaseProdMessagingSenderId,
    appId: firebaseProdAppId,
    measurementId: firebaseProdMeasurementId
};

const firebaseDevConfig: IFirebaseConfig = {
    apiKey: firebaseDevApiKey,
    authDomain: `${firebaseDevProjectId}.firebaseapp.com`,
    databaseURL: `https://${firebaseDevProjectId}-default-rtdb.europe-west1.firebasedatabase.app`,
    projectId: firebaseDevProjectId,
    storageBucket: `${firebaseDevProjectId}.appspot.com`,
    messagingSenderId: firebaseDevMessagingSenderId,
    appId: firebaseDevAppId,
    measurementId: firebaseDevMeasurementId
};

export {
    firebaseProdConfig,
    firebaseDevConfig
}