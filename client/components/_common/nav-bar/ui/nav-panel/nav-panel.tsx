import {FC} from 'react';
import {StyledNavPanel} from "./nav-panel.styled";
import {useTranslation} from "next-i18next";
import {CustomLink} from "../../../link";
import colors from "../../../../../styles/globals/colors";
import {useSelector} from "react-redux";
import {getLoginState} from "../../../login-form/model/login-form.selectors";
import {linksArray} from "../../model/nav-bar.data";

interface LinkPanelProps {
    linkHoverFontColor?: string
    linkHoverBackground?: string
}

const NavPanel: FC<LinkPanelProps> = ({linkHoverFontColor,linkHoverBackground}) => {

    const { t } = useTranslation("common");
    const loggedIn = useSelector(getLoginState) === "success";
    const linksData = linksArray(t);

    return (
        <StyledNavPanel>
            {
                linksData.map(obj => {
                    if(obj.type === "public" || (obj.type === "private" && loggedIn)){
                        return(
                            <CustomLink
                                key={obj.name}
                                width={"auto"}
                                height={"100%"}
                                linkName={obj.name}
                                href={`/${obj.link}`}
                                fontColor={colors.lightGrey}
                                fontHoverColor={linkHoverFontColor}
                                color={colors.brightLime}
                                backgroundColor={linkHoverBackground}
                            />
                        )
                    }
                })
            }
        </StyledNavPanel>
    );
};

export default NavPanel;