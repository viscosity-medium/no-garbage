import React, {useRef, useState} from 'react';
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import CustomImage from "../../../_common/custom-image/custom-image";
import UploadImg from "public/assets/map/upload-icon.svg"
import Text from "../../../_common/text/text";
import colors from "../../../../styles/globals/colors";
import HStack from "../../../_common/flex-stack/h-stack/h-stack";
import Button from "../../../_common/button/button";
import {Div} from "../../../_common/custom-image/custom-div.styled";

const UploadArea = () => {
    const fileRef: any = useRef();
    const [drag, setDrag] = useState<boolean | string>(false);
    const [isFilled, setIsFilled] = useState<boolean | string>(false)
    const uploadButtonHandler = () => {
        fileRef.current.click();
    }

    const fileInputOnChange = () => {setIsFilled(true)}
    const onDragStartHandler = (e) => {
        e.preventDefault();
        setDrag(prevState => true)
    }

    const onDragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(prevState => false)
    }

    const onDropHandler = (e) => {
        e.preventDefault();
        const files = [...e.dataTransfer.files];
        console.log(files)
    }
    return (
        <Div
            position={"relative"}
            width={"200px"}
            height={"200px"}
            zIndex={2}
            cursor={"pointer"}
            margin={"30px"}
            onDragStart={e => onDragStartHandler(e)}
            onDragOver={e => onDragStartHandler(e)}
            onDragLeave={e => onDragLeaveHandler(e)}
            onDrop={e => onDropHandler(e)}
            initScale={drag ? "1.03" : "" }
            onClick={uploadButtonHandler}
        >
            <VStack
                align={"center"}
                justify={"center"}
                width={"100%"}
                height={"100%"}
                border={"2px dashed #000000"}
                background={drag ? colors.lightGrey : colors.white }
            >
                <CustomImage
                    position={"relative"}
                    width={"32px"}
                    height={"32px"}
                    zIndex={1}
                    backgroundImage={UploadImg}
                />
                <HStack
                    margin={"8px 0 0px"}
                    position={"relative"}
                >
                    <Text
                        tag={"span"}
                        text={"Drag and Drop\n-or-"}
                        size={"12px"}
                        textAlign={"center"}
                    />
                </HStack>
                <Button
                    buttonName={"Browse files"}
                    height={"auto"}
                    width={"auto"}
                    size={"12px"}
                    lineHeight={600}
                    color={colors.blueUpload}
                    textDecoration={"underline"}
                />
                <input
                    onChange={fileInputOnChange}
                    ref={fileRef}
                    style={{
                        display: "none"
                    }}
                    type={"file"}
                />
            </VStack>
        </Div>

    );
};

export default UploadArea;