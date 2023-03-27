import React from 'react';
import {windowHeaderData} from "./window-header-data";
import Text from "../../_common/text/text";
import HStack from "../../_common/flex-stack/h-stack/h-stack";
import {useTranslation} from "next-i18next";
import {Div} from "../../_common/custom-image/custom-div.styled";
import colors from "../../../styles/globals/colors";

const WindowHeader = () => {
    const { t } = useTranslation("moderation");
    return (
        <Div
            zIndex={3}
            height={"auto"}
            width={"100%"}
            position={"sticky"}
            top={"0"}
        >
            <HStack>
                {
                    windowHeaderData.map((header,index) => (
                        <HStack
                            key={`${header}-${index}`}
                            position={"relative"}
                            width={header.width}
                            height={"50px"}
                            justify={"start"}
                            align={"center"}
                            border={"solid #AFB1B6 1px"}
                            background={colors.moderationTableHeader}
                        >
                            <Text
                                key={header.text}
                                tag={"span"}
                                margin={"0 0 0 10px"}
                            >{t(header.text)}</Text>
                        </HStack>

                    ))
                }
            </HStack>
        </Div>
    );
};

export default WindowHeader;