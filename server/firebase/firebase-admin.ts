import admin, {ServiceAccount} from "firebase-admin";
import { initializeApp } from 'firebase-admin/app';
import {serviceAccountCredentials} from "./service-account-keys";
import {systemVariables} from "../system/system";

export const firebaseAdminInstance = (() => {

    switch (systemVariables.isDev){

        case true:
        return initializeApp({
            credential: admin.credential.cert(serviceAccountCredentials.credentials as ServiceAccount),
        });

        case false:
            return initializeApp({
                credential: admin.credential.cert(serviceAccountCredentials.credentials as ServiceAccount),
                databaseURL: serviceAccountCredentials.url
        });

    }

})();
