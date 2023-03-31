import React from 'react';
import Text from "../../../../_common/text/text";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import CustomImage from "../../../../_common/custom-image/custom-image";
import {Div} from "../../../../_common/custom-image/custom-div.styled";
import {SwiperComponent} from "../../../../_common/swiper/ui/swiper/swiper";


const VolunteersSection = () => {


    const message = "/assets/main-page/message.png"
    const photos = ["/assets/main-page/volunteer.png", "/assets/main-page/volunteer.png", "/assets/main-page/volunteer.png"]

    return (
        <div>
            <Text
                tag={"h3"}
                size={"48px"}
                lineHeight={"1.5"}
                position={"relative"}
                alignSelf={"flex-start"}
                width={"510px"}
            >
                Why doing cleanups?
            </Text>
            <HStack
                margin={"48px 0"}
                width={"100%"}
                height={"auto"}
                position={"relative"}
            >
                <CustomImage
                    position={"absolute"}
                    top={"-76%"}
                    right={"0"}
                    zIndex={1}
                    width={"300px"}
                    height={"300px"}
                    backgroundImage={message}
                />
                <Div
                    width={"100%"}
                    height={"auto"}
                    position={"relative"}
                    zIndex={2}
                >
                    <SwiperComponent
                        photos={["khbkh", "khbkc", "khbky", "khbky"]}
                    >
                    </SwiperComponent>
                </Div>

            </HStack>

        </div>
    );
};

export { VolunteersSection };