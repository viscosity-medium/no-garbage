import React, {FC} from 'react';
import { useTranslation } from "next-i18next";
import { StyledSection } from "../promo-section/ui/promo-section/promo.styled";
import colors from "../../../styles/globals/colors";
import HStack from "../../_common/flex-stack/h-stack/h-stack";
import GoalItem from "./goal-item/goal-item";
import Text from "../../_common/text/text";
import GoalsItemInternal from "./goal-item/goals-item-internal/goals-item-internal";
import VStack from "../../_common/flex-stack/v-stack/v-stack";

interface IGoals {
    width?: string
}
const Goals: FC<IGoals> = ({ width }) => {
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
                    <GoalItem
                        backgroundImage={"/assets/main-page/goals-section-1.png"}
                        number={t('goals1Number')}
                        descriptionText={t('goals1Description')}
                        width={"240px"}
                        height={"240px"}
                        margin={"0 auto 0 0"}
                    >
                        <GoalsItemInternal
                            number={t('goals1Number')}
                            descriptionText={t('goals1Description')}
                            width={"240px"}
                        />
                    </GoalItem>
                    <GoalItem
                        backgroundImage={"/assets/main-page/goals-section-2.png"}
                        number={t('goals2Number')}
                        descriptionText={t('goals2Description')}
                        width={"240px"}
                        height={"240px"}
                        margin={"36px 0 36px auto"}
                    >
                        <GoalsItemInternal
                            number={t('goals2Number')}
                            descriptionText={t('goals2Description')}
                            width={"240px"}
                        />
                    </GoalItem>
                    <GoalItem
                        backgroundImage={"/assets/main-page/goals-section-3.png"}
                        number={t('goals3Number')}
                        descriptionText={t('goals3Description')}
                        width={"240px"}
                        height={"240px"}
                        margin={"0 auto 0 0"}
                    >
                        <GoalsItemInternal
                            number={t('goals3Number')}
                            descriptionText={t('goals3Description')}
                            width={"240px"}
                        />
                    </GoalItem>
                </VStack>
            </VStack>
        </StyledSection>
    );
};

export default Goals;