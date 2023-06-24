import React from 'react';
import {CustomLink} from "../../../../../../_common/link";

const SocialButton = ({backgroundImage, link}) => {

    return (
        <CustomLink
            externalHref={link}
            width={"36px"}
            height={"36px"}
            margin={"0 8px"}
            backgroundImage={backgroundImage}
        />
    );
};

export default SocialButton;