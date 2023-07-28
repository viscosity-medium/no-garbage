import React, {FC} from 'react';
import {useTranslation} from "next-i18next";
import {StyledSection} from "../../../promo-section/ui/promo-section/promo.styled";
import GoalItem from "../goals-item/goal-item";
import {Text} from "../../../../_common/text";
import GoalsItemInternal from "../goals-item/goals-item-internal/goals-item-internal";
import {VStack} from "../../../../_common/flex-stack";
import {IGoals} from "../../model/goals-section.types";
import {goalsSectionData} from "../../model/goals-section.data";
import {useSelector} from "react-redux";
import {getDynamicInfo} from "../../../../_layout/layout/model/layout.selectors";

const Goals: FC<IGoals> = ({ width }) => {

    const mainPageDynamicInfo = useSelector(getDynamicInfo);
    const goals = mainPageDynamicInfo?.main_page.goals || {};
    const { t } = useTranslation('main');

    return (
        <StyledSection
            width={width}
            padding={"100px 0 0"}
        >
            <VStack
                align={"center"}
            >
                <Text
                    tag={"h3"}
                    size={"48px"}
                    lineHeight={"1.5"}
                    fontWeight={"500"}
                    position={"relative"}
                    alignSelf={"flex-start"}
                    width={"510px"}
                >
                    {t('goalsTitle')}
                </Text>
                <VStack
                    justify={"space-between"}
                    align={"center"}
                    width={"1000px"}
                    margin={"80px 0"}
                >
                    {
                        goalsSectionData(t, goals).map((goalsItem, index) => {
                            return (
                                <GoalItem
                                    key={`${index}-${goalsItem.descriptionText}`}
                                    backgroundImage={goalsItem.backgroundImage}
                                    number={goalsItem.number}
                                    descriptionText={goalsItem.descriptionText}
                                    width={"240px"}
                                    height={"240px"}
                                    margin={goalsItem.margin}
                                >
                                    <GoalsItemInternal
                                        number={goalsItem.number}
                                        descriptionText={goalsItem.descriptionText}
                                        width={"240px"}
                                    />
                                </GoalItem>
                            )
                        })
                    }

                </VStack>
            </VStack>
        </StyledSection>
    );
};

export { Goals };