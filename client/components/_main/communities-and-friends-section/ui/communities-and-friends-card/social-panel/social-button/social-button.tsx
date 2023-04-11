import React from 'react';
import Button from "../../../../../../_common/button/button";
import CustomImage from "../../../../../../_common/custom-image/custom-image";
import {useRouter} from "next/router";
import CustomLink from "../../../../../../_common/link/custom-link";

const SocialButton = ({backgroundImage, link}) => {

    const {push} = useRouter();

    const onButtonClick = () => {

    }

    return (
        <CustomLink
            externalHref={link}
            width={"36px"}
            height={"36px"}
            margin={"0 8px"}
            backgroundImage={backgroundImage}
        />
        // <Button
        //     margin={"0 8px"}
        //     width={"36px"}
        //     height={"36px"}
        // >
        //     <CustomImage
        //         position={"relative"}
        //         width={"100%"}
        //         height={"100%"}
        //         zIndex={1}
        //         backgroundImage={backgroundImage}
        //     />
        // </Button>
    );
};

export default SocialButton;