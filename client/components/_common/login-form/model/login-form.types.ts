export interface FetchFirebaseLogin {
    email: string
    password: string
}

export interface LoginFormSchema extends FetchFirebaseLogin {
    loginState: "not-authenticated" | "pending" | "success" | "error",
    loginData: any,
    visibility: boolean
}