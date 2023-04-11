import React from 'react';
import colors from "../../../../../styles/globals/colors";
import CustomImage from "../../../../_common/custom-image/custom-image";
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import Text from "../../../../_common/text/text";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import SocialPanel from "./social-panel/social-panel";

const CommunitiesAndFriendsCard = () => {

    const cardImage = "/assets/main-page/communities-and-friends-card.png";

    return (
        <VStack
            margin={"0 20px"}
            padding={"30px 32px 56px"}
            width={"388px"}
            height={"535px"}
            align={"center"}
            border={"2px solid #100F0F"}
            borderRadius={"30px"}
            background={colors.white}
        >
            <CustomImage
                position={"relative"}
                backgroundImage={cardImage}
                zIndex={1}
                width={"160px"}
                height={"160px"}
                borderRadius={"50%"}
            />
            <VStack
                margin={"30px 0 0"}
                width={"auto"}
                align={"center"}
            >
                <Text
                    tag={"h3"}
                    size={"28px"}
                    lineHeight={"1.2"}
                    textAlign={"center"}
                >
                    Community
                </Text>
                <Text
                    margin={"18px 0 56px"}
                    tag={"span"}
                    size={"20px"}
                    lineHeight={"1.3"}
                    textAlign={"center"}
                >
                    Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.
                </Text>
                <SocialPanel/>
            </VStack>
        </VStack>
    );
};

export default CommunitiesAndFriendsCard;