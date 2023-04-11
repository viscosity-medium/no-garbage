import React from 'react';
import HStack from "../../../../../_common/flex-stack/h-stack/h-stack";
import SocialButton from "./social-button/social-button";

const SocialPanel = () => {

    const panelButtons = [
        {
            path: "assets/main-page/socials/instagram.svg",
            link: "https://www.instagram.com/"
        },
        {
            path: "assets/main-page/socials/facebook.svg",
            link: "https://www.facebook.com/"
        },
        {
            path: "assets/main-page/socials/twitter.svg",
            link: "https://twitter.com/"
        },
        {
            path: "assets/main-page/socials/linkedIn.svg",
            link: "https://www.linkedin.com/"
        },
    ];

    return (
        <HStack>
            {
                panelButtons.map((buttonImage)=>(
                    <SocialButton
                        key={buttonImage.path}
                        link={buttonImage.link}
                        backgroundImage={buttonImage.path}
                    />
                ))
            }
        </HStack>
    );
};

export default SocialPanel;