import {signInWithEmailAndPassword} from "firebase/auth";

export const authenticateFirebaseUser = ({auth}) => async ({email, password})  => {

    return await (
        signInWithEmailAndPassword(auth, email, password)
    )
    .then((userCredentials) => {
        return userCredentials.user;
    })
    .catch((error) => {
        return error
    })
}