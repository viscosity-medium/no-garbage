import React, {FC} from 'react';
import colors from "../../../../../styles/globals/colors";
import {CustomImage} from "../../../../_common/custom-image";
import {VStack} from "../../../../_common/flex-stack";
import {Text} from "../../../../_common/text";
import SocialPanel from "./social-panel/social-panel";
import {CommunitiesAndFriendsCardProps} from "../../model/communities-and-friends-section.types";

const CommunitiesAndFriendsCard: FC<CommunitiesAndFriendsCardProps> = ({communityInfo}) => {

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
                backgroundImage={communityInfo.logo}
                zIndex={1}
                width={"160px"}
                height={"160px"}
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
                    fontWeight={"500"}
                >
                    {
                        communityInfo.name
                    }
                </Text>
                <Text
                    margin={"18px 0 56px"}
                    tag={"span"}
                    size={"20px"}
                    lineHeight={"1.3"}
                    textAlign={"center"}
                >
                    {
                        communityInfo.description
                    }
                </Text>
                <SocialPanel/>
            </VStack>
        </VStack>
    );
};

export default CommunitiesAndFriendsCard;