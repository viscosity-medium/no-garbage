import {systemVariables} from "../system/system";

interface IFirebaseConfig {
    apiKey: string
    authDomain: string
    projectId: string
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
    projectId: firebaseProdProjectId,
    storageBucket: `${firebaseProdProjectId}.appspot.com`,
    messagingSenderId: firebaseProdMessagingSenderId,
    appId: firebaseProdAppId,
    measurementId: firebaseProdMeasurementId
};

const firebaseDevConfig: IFirebaseConfig = {

    apiKey: firebaseDevApiKey,
    authDomain: `${firebaseDevProjectId}.firebaseapp.com`,
    projectId: firebaseDevProjectId,
    storageBucket: `${firebaseDevProjectId}.appspot.com`,
    messagingSenderId: firebaseDevMessagingSenderId,
    appId: firebaseDevAppId,
    measurementId: firebaseDevMeasurementId,

};

export {
    firebaseProdConfig,
    firebaseDevConfig
}