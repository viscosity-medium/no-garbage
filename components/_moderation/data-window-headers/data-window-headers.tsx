import React from 'react';
import {dataWindowHeaders} from "../data-window/window-headers";
import Text from "../../_common/text/text";
import HStack from "../../_common/flex-stack/h-stack/h-stack";
import {useTranslation} from "next-i18next";

const DataWindowHeaders = () => {
    const { t } = useTranslation("moderation");
    return (
        <HStack
            align={"center"}
            width={"100%"}
            height={"50px"}
        >
            {
                dataWindowHeaders.map(header => (
                    <Text
                        key={header.text}
                        tag={"span"}
                        width={header.width}
                        text={t(header.text)}
                    />
                ))
            }
        </HStack>
    );
};

export default DataWindowHeaders;