import React from 'react';
import {CustomImage} from "../../../_common/custom-image";

const BottomImageSection = () => {

    const cleaningHeroes = "/assets/main-page/cleaning-heroes.png"

    return (
        <CustomImage
            position={"relative"}
            overflow={"visible"}
            backgroundImage={cleaningHeroes}
            width={"100vw"}
            height={"840px"}
            zIndex={1}
        />
    );

};

export { BottomImageSection };