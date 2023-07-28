import {signInWithEmailAndPassword, signInWithCustomToken} from "firebase/auth";
import {use} from "i18next";


export const authenticateFirebaseUser = ({auth}) => async ({email, password, token}: {
    email: string
    password: string,
    token?: string
})  => {


    // if(token){
    //     console.log(token)
    //     const tipaUser = await signInWithCustomToken(auth, token);
    //     console.log(tipaUser)
    // }


    return await (
        signInWithEmailAndPassword(auth, email, password)
    )
    .then((userCredentials) => {
        //console.log(userCredentials)
        return userCredentials;
    })
    .catch((error) => {
        return error
    })

}