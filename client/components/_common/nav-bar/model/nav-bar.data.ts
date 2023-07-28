import {LinksArray} from "./nav-bar.types";

export const linksArray: LinksArray = (t) => ([
    {
        name: t("navbar.map"),
        link: "map",
        type: "public"
    },
    {
        name: t("navbar.moderation"),
        link: "moderation",
        type: "private"
    }
]);