import {axiosInstance} from "../configs/axios-config";

const updateFirebaseReportAndGeoJson = async ({ modalForm }) => {

    await axiosInstance.put("update-firebase-reports-and-geo-json", {
        modalForm: modalForm
    });
    
}

export {
    updateFirebaseReportAndGeoJson
}