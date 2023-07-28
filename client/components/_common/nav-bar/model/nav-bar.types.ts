export interface LinksArrayProps {
    name: string,
    link: string,
    type: "public" | "private"
}

export type LinksArray = (t) => LinksArrayProps[];