import {FC} from 'react';
import {StyledLinkPanel} from "./link-panel.styled";
import {useTranslation} from "next-i18next";
import {linksArray} from "./links-array";
import CustomLink from "../../link/custom-link";
import colors from "../../../../styles/globals/colors";
import {useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";
import {getLoginState} from "../../login-modal-window/model/login-modal-window.selectors";

interface LinkPanelProps {
    linkHoverFontColor?: string
    linkHoverBackground?: string
}

const LinkPanel: FC<LinkPanelProps> = ({linkHoverFontColor,linkHoverBackground}) => {

    const { t } = useTranslation("main");
    const loggedIn = useSelector(getLoginState) === "success";
    console.log(loggedIn)

    return (
        <StyledLinkPanel>
            {
                linksArray.map(link => {
                    return(
                        <CustomLink
                            key={link}
                            width={"auto"}
                            height={"100%"}
                            linkName={t(`${link}`)!}
                            href={`/${link.toLowerCase()}`}
                            fontColor={colors.lightGrey}
                            fontHoverColor={linkHoverFontColor}
                            color={colors.brightLime}
                            backgroundColor={linkHoverBackground}
                        />
                    )
                })
            }
            {
                loggedIn ? (
                    <CustomLink
                        key={"moderation"}
                        width={"auto"}
                        height={"100%"}
                        linkName={t(`${"Moderation"}`)!}
                        href={`/${"moderation".toLowerCase()}`}
                        fontColor={colors.lightGrey}
                        fontHoverColor={linkHoverFontColor}
                        color={colors.brightLime}
                        backgroundColor={linkHoverBackground}
                    />
                ) : null
            }
        </StyledLinkPanel>
    );
};

export default LinkPanel;