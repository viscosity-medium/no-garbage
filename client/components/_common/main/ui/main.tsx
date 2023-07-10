import React, {FC} from 'react';
import {MainProps, MainStyled} from "./main.styled";



const Main: FC<MainProps> = ({children}) => {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    );
};

export default Main;