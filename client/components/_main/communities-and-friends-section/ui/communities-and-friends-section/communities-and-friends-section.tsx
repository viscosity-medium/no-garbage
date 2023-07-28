import React from 'react';
import CommunitiesAndFriendsCard from "../communities-and-friends-card/communities-and-friends-card";
import {Text} from "../../../../_common/text";
import {HStack} from '../../../../_common/flex-stack';
import {StyledSection} from "../../../promo-section/ui/promo-section/promo.styled";
import {useTranslation} from "next-i18next";
import {communitiesAndFriendsData} from "../../model/communities-and-friends.data";

const CommunitiesAndFriendsSection = () => {
    const {t} = useTranslation("main")
    const communitiesAndFriends = t("communitiesAndFriends");
    return (
        <StyledSection
            width={"100%"}
        >
            <Text
                tag={"h3"}
                size={"48px"}
                lineHeight={"1.5"}
                position={"relative"}
                alignSelf={"flex-start"}
            >
                {communitiesAndFriends}
            </Text>
            <HStack
                justify={"center"}
                margin={"48px 0"}
                width={"100%"}
                height={"auto"}
                position={"relative"}
            >
                {
                    communitiesAndFriendsData.map(communityInfo => {
                        return (
                            <CommunitiesAndFriendsCard
                                key={communityInfo.name}
                            	communityInfo={communityInfo}
                            />
                        )
                    })
                }
            </HStack>
        </StyledSection>
    );
};

export { CommunitiesAndFriendsSection };