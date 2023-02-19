import React, {FC} from 'react';
import CustomLink from "../../link/custom-link";
import {useTranslation} from "next-i18next";
import {StyledLinkPanel} from "./link-panel.styled";
import colors from "../../../../styles/globals/colors";
import {linksArray} from "./links-array";

const LinkPanel: FC = () => {
    const { t } = useTranslation("main")
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
                            background={colors.backgroundMilk}
                        />
                    )
                })
            }
        </StyledLinkPanel>
    );
};

export default LinkPanel;