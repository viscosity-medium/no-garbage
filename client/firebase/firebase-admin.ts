// import {systemVariables} from "../system/system";
// import admin, {auth, } from "firebase-admin";
// import {serviceAccountCredentials} from "./service-account-keys/service-account-keys";
// import {initFirestore} from "@next-auth/firebase-adapter";
// import serviceAccount from "./service-account-keys/service-account-key.json"
// import {App} from "firebase-admin/lib/app";
//
// export const firebase: App = (() => {
//
//     switch (systemVariables.isDev){
//
//         case true:
//             return admin.initializeApp({
//                 credential: admin.credential.cert(serviceAccount as any),
//             });
//
//         case false:
//             return admin.initializeApp({
//                 credential: admin.credential.cert(serviceAccount as any),
//                 databaseURL: serviceAccountCredentials.url
//             });
//
//     }
//
// })();
//
// export const firestore = initFirestore(firebase);
// const reportsRef = firestore.collection("reports");
// const dynamicInfoRef = firestore.collection("dynamic_info");
//
// export const firebaseAdminInstance = {
//     firebase,
//     firestore,
//     auth,
//     reportsRef,
//     dynamicInfoRef
// }
