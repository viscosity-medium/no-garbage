import React from 'react';
import {StyledSection} from "../../promo-section/ui/promo-section/promo.styled";
import colors from "../../../../styles/globals/colors";
import {Text} from "../../../_common/text";
import {Button} from "../../../_common/button";
import {VStack, HStack} from "../../../_common/flex-stack";
import {useTranslation} from "next-i18next";
import GoalItem from "../../goals-section/ui/goals-item/goal-item";
import {useRouter} from "next/router";

const HelpSection = () => {
    const {t} = useTranslation("main");
    const {push} = useRouter();
    const mapButtonHandler = () => {
        return push("/map")
    };
    return (
        <StyledSection
            height={"961x"}
            padding={"120px 0"}
            backgroundColor={colors.lightGoldenrodYellow}
        >
            <VStack
                justify={"center"}
                align={"center"}
                height={"586px"}
                width={"100%"}
            >
                <Text
                    tag={"h3"}
                    textAlign={"center"}
                >
                    ${t("helpSectionTitle")}
                </Text>
                <HStack
                    margin={"116px 0 96px"}
                    width={"100%"}
                    height={"200px"}
                    justify={"space-between"}
                    align={"center"}
                    padding={"0 220px"}
                    background={colors.whiteBright}
                >
                    <GoalItem
                        backgroundImage={"/assets/main-page/step-1.png"}
                        number={t('goals1Number')}
                        descriptionText={t('goals1Description')}
                        width={"160px"}
                        height={"160px"}
                    >
                        <VStack
                            justify={"space-between"}
                            align={"flex-start"}
                            margin={"0 0 0 22px"}
                            height={"70px"}
                        >
                            <Text
                                tag={"span"}
                                text={t("step") + " 1"}
                                size={"24px"}
                            />
                            <Text
                                tag={"span"}
                                size={"16px"}
                            >
                                t("step1Description")
                            </Text>
                        </VStack>
                    </GoalItem>
                    <GoalItem
                        backgroundImage={"/assets/main-page/step-2.png"}
                        number={t('goals2Number')}
                        descriptionText={t('goals2Description')}
                        width={"160px"}
                        height={"160px"}
                    >
                        <VStack
                            justify={"space-between"}
                            align={"flex-start"}
                            margin={"0 0 0 22px"}
                            height={"70px"}
                        >
                            <Text
                                tag={"span"}
                                text={t("step") + " 2"}
                                size={"24px"}
                            />
                            <Text
                                tag={"span"}
                                size={"16px"}
                            >
                                t("step2Description")
                            </Text>
                        </VStack>
                    </GoalItem>
                    <GoalItem
                        backgroundImage={"/assets/main-page/step-3.png"}
                        number={t('goals3Number')}
                        descriptionText={t('goals3Description')}
                        width={"160px"}
                        height={"160px"}
                    >
                        <VStack
                            justify={"space-between"}
                            align={"flex-start"}
                            margin={"0 0 0 22px"}
                            height={"70px"}
                        >
                            <Text
                                tag={"span"}
                                text={t("step") + " 3"}
                                size={"24px"}
                            />
                            <Text
                                tag={"span"}
                                size={"16px"}
                            >
                                t("step3Description")
                            </Text>
                        </VStack>
                    </GoalItem>
                </HStack>
                <Button
                    buttonName={t("mapSectionButtonName")!}
                    onClick={mapButtonHandler}
                    backgroundColor={colors.terraCotta}
                    color={colors.white}
                    width={"340px"}
                />
            </VStack>
        </StyledSection>
    );
};

export { HelpSection };