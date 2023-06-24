import {FC} from 'react';
import {StyledLinkPanel} from "./link-panel.styled";
import {useTranslation} from "next-i18next";
import {linksArray} from "../../model/links-array";
import {CustomLink} from "../../../link";
import colors from "../../../../../styles/globals/colors";
import {useAppDispatch} from "../../../../../store/store";
import {useSelector} from "react-redux";
import {getLoginState} from "../../../login-form/model/login-form.selectors";

interface LinkPanelProps {
    linkHoverFontColor?: string
    linkHoverBackground?: string
}

const LinkPanel: FC<LinkPanelProps> = ({linkHoverFontColor,linkHoverBackground}) => {

    const { t } = useTranslation("main");
    const loggedIn = useSelector(getLoginState) === "success";

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