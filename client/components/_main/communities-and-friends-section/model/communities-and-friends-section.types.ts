export interface CommunitiesAndFriendsProps {
    name: string,
    description: string,
    logo: string,
    socials: {
        facebookLink: string,
        instagramLink: string,
        telegramLink: string
    }
}

export type CommunitiesAndFriendsData = CommunitiesAndFriendsProps[]

export interface CommunitiesAndFriendsCardProps {
    communityInfo: CommunitiesAndFriendsProps
}
