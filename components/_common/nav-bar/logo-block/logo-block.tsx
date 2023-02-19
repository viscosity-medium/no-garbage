import React from 'react';
import CustomImage from "../../custom-image/custom-image";
import Text from "../../text/text";
import {LogoBlockWrapper} from "./logo-block.styled";
import Logo from "public/assets/main-page/logo.png"
import {useRouter} from "next/router";

const LogoBlock = () => {
    const router = useRouter()
    return (
        <LogoBlockWrapper
            onClick={()=>{
                router?.push("/")
            }}
        >
            <CustomImage
                position={"relative"}
                backgroundImage={Logo}
                width={"56px"}
                height={"56px"}
                zIndex={2}
            />
            <Text
                tag={"h1"}
                text={"Nogarba.ge"}
            />
        </LogoBlockWrapper>

    );
};

export default LogoBlock;