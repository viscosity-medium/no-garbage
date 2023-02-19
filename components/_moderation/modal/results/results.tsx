import React, {FC} from 'react';
import Text from "../../../_common/text/text";
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import HStack from "../../../_common/flex-stack/h-stack/h-stack";
import CustomImage from "../../../_common/custom-image/custom-image";
import {useDispatch, useSelector} from "react-redux";
import {resultsImages} from "../test/images";
import {modalActions} from "../modal-slice";
import {getModalContent} from "../modal-selectors";

interface IResults {
    photos?: any[]
}
const Results: FC<IResults> = ({photos}) => {
    const dispatch = useDispatch();
    const clickHandler = (photo) => () => {
        dispatch(modalActions.setChosenPhoto(photo));
    }
    return (
        <VStack>
            <Text
                tag={"h3"}
                text={"Results"}
                size={"26px"}
            />
            <Text tag={"span"} text={"Trunk-full of recyclables, and multiple bags of litter collected into garbage bins."}/>
            <HStack
                height={"auto"}
                width={"100%"}
                position={"relative"}
                margin={"20px 0"}
                wrap={"wrap"}
            >
                {
                    photos?.map(photo => {
                        return(
                            <CustomImage
                                key={photo}
                                clickHandler={clickHandler(photo)}
                                margin={"10px 10px"}
                                position={"relative"}
                                zIndex={2}
                                zIndexAfter={0}
                                height={"180px"}
                                width={"180px"}
                                cursor={"pointer"}
                                overflow={"hidden"}
                                backgroundImage={photo}
                                imageTransition={"0.4s"}
                                imageScale={"1.2"}
                            />
                        )
                    })
                }
            </HStack>
        </VStack>
    );
};

export default Results;