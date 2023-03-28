import React from 'react';
import CommunitiesAndFriendsCard from "../communities-and-friends-card/communities-and-friends-card";
import Text from "../../../../_common/text/text";
import HStack from '../../../../_common/flex-stack/h-stack/h-stack';

const CommunitiesAndFriendsSection = () => {
    return (
        <div>
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
        </div>
    );
};

export { CommunitiesAndFriendsSection };