import {SessionProvider as SessionProviderNextAuth} from "next-auth/react";
import {FC, ReactNode} from "react";

interface SessionProviderProps{
    children: ReactNode
    session: any
}

export const SessionProvider: FC<SessionProviderProps> = ({children, session}) =>  {
    return (
        <SessionProviderNextAuth session={session}>
            {children}
        </SessionProviderNextAuth>
    )
}