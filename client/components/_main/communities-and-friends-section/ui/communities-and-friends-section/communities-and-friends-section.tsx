import React from 'react';
import CommunitiesAndFriendsCard from "../communities-and-friends-card/communities-and-friends-card";
import {Text} from "../../../../_common/text";
import {HStack} from '../../../../_common/flex-stack';
import {StyledSection} from "../../../promo-section/ui/promo-section/promo.styled";

const CommunitiesAndFriendsSection = () => {
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
                Communities and friends
            </Text>
            <HStack
                justify={"center"}
                margin={"48px 0"}
                width={"100%"}
                height={"auto"}
                position={"relative"}
            >
                <CommunitiesAndFriendsCard/>
                <CommunitiesAndFriendsCard/>
                <CommunitiesAndFriendsCard/>
            </HStack>
        </StyledSection>
    );
};

export { CommunitiesAndFriendsSection };