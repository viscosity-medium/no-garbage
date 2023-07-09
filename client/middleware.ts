import {NextResponse} from "next/server";

export {default} from "next-auth/middleware";

export const middleware = async (req) => {

    const url = req.url
    const email = req.cookies.get("email")?.value || undefined;
    const password = req.cookies.get("password")?.value || undefined;
    const refreshToken = req.cookies.get("refreshToken")?.value || undefined;
    const accessToken = req.cookies.get("accessToken")?.value || undefined;

    if(!email || !password || !refreshToken || !accessToken){

        if(url.match(/http:\/\/localhost:4141\/.*\/moderation/)){
            return NextResponse.redirect(`http://localhost:4141/`)
        }

    }

}