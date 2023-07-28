import {NextRequest, NextResponse} from "next/server";

export const middleware = async (req: NextRequest) => {

    const url = req.url
    const email = req.cookies.get("email")?.value || undefined;
    const password = req.cookies.get("password")?.value || undefined;
    const currentUser = req.cookies.get("currentUser")?.value || undefined;
    const refreshToken = req.cookies.get("refreshToken")?.value || undefined;
    const accessToken = req.cookies.get("accessToken")?.value || undefined;

    if(!currentUser || !email || !password || !refreshToken || !accessToken){

        // if(url.match(/http:\/\/localhost:4141\/.*\/moderation/)){
        //     return NextResponse.redirect(`http://localhost:4141/`)
        // }

    }

}

// export const config = {
//     matcher: ["/moderation", "/((?!_next/static|favicon.ico|logo.svg|.*[\.png|\.svg]).*)"],
// };