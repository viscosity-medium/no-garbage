import React, {FC} from 'react';
import {Text} from "../../text";
import colors from "../../../../styles/globals/colors";
import {Div} from "../../custom-image/ui/custom-div.styled";

interface CompleteBarProps {
    backgroundColor: string
}

const CompleteBar: FC<CompleteBarProps> = ({backgroundColor}) => {

    return (
        <Div
            position={"absolute"}
            height={"200%"}
            zIndex={2}
            width={"25%"}
            maxHeight={"unset"}
            left={`${50-12.5}%`}
            top={`-${50}%`}
            backgroundColor={backgroundColor}
            borderRadius={"50px"}
        >
            <Text
                display={"block"}
                tag={"span"}
                textAlign={"center"}
                width={"100%"}
                color={colors.white}
                size={"16px"}
                lineHeight={"1.3"}
            >
                100%
            </Text>
        </Div>
    );
};

export { CompleteBar };