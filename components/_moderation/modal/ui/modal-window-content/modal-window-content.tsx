import {changeModalForm, clickSaveButton, hideModalWindow, initializeModalForm} from "../../model/modal.helpers";
import {getModalContent, getSaveButtonState} from "../../model/modal-selectors";
import {useSelector} from "react-redux";
import {FC, useEffect, useState} from 'react';
import ModerationCaseProperties from "../moderation-case-properties/moderation-case-properties";
import ModalPhotoBlock from "../results/modal-photo-block";
import CrossIcon from "public/assets/common/cross-icon.svg"
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import Button from "../../../../_common/button/button";
import MeetUp from "../meet-up/meet-up";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import colors from "../../../../../styles/globals/colors";
import {Div} from "../../../../_common/custom-image/custom-div.styled";
import Text from "../../../../_common/text/text";
import {useAppDispatch} from "../../../../../store/store";
import {getFilterValue, getOrderValue} from "../../../../_common/filter-switcher/filter-switch-selectors";
import {getPaginationQuantity} from "../../../pagination-panel/pagination-selectors";
import {getSearchBarValue} from "../../../data-window/data-window-selectors";

interface IModalWindowContent {
    visibility: boolean
    modalWindowHeight?: string
}

const ModalWindowContent: FC<IModalWindowContent> = ({visibility, modalWindowHeight}) => {

    const paginationQuantity = useSelector(getPaginationQuantity);
    const saveButtonState = useSelector(getSaveButtonState);
    const searchBarValue = useSelector(getSearchBarValue);
    const content = useSelector(getModalContent);
    const filter = useSelector(getFilterValue);
    const order = useSelector(getOrderValue);

    const right = visibility ? "0" : "-460px";
    const location = content?.location;
    const photos = content?.photos?.map((photoObject: any) => photoObject);

    const dispatch = useAppDispatch();
    const [modalForm, setModalForm] = useState(initializeModalForm({content}));

    useEffect(()=>{
        setModalForm(initializeModalForm({content}))
    },[content])

    return (
        <Div
            overflow={"scroll"}
            overflowX={"hidden"}
            position={"absolute"}
            zIndex={10}
            zIndexAfter={-1}
            width={"460px"}
            height={modalWindowHeight || "100vh"}
            right={right}
            top={"0"}
            borderLeft={`solid 2px ${colors.darkGrey}`}
            background={colors.white}
        >
            <VStack
                position={"relative"}
                padding={"0 30px"}
            >
                <Div
                    position={"fixed"}
                    width={"388px"}
                    height={"auto"}
                    zIndex={3}
                    background={colors.white}
                >
                    <HStack
                        width={"100"}
                    >
                        <Button
                            position={"relative"}
                            right={"0px"}
                            width={"20px"}
                            height={"20px"}
                            margin={"20px 0 15px auto"}
                            backgroundImage={CrossIcon.src}
                            handleClick={hideModalWindow({dispatch})}
                        />
                    </HStack>
                </Div>
                <VStack
                    margin={"60px 0 0 "}
                >
                    <ModalPhotoBlock
                        photos={photos}
                    />
                </VStack>
                <ModerationCaseProperties
                    modalForm={modalForm}
                    changeModalForm={
                        changeModalForm({dispatch, modalForm, setModalForm})
                    }
                />
                <MeetUp
                    location={location}
                    modalForm={modalForm}
                    changeModalForm={
                        changeModalForm({dispatch, modalForm, setModalForm})
                    }
                />
                <Button
                    margin={"10px 0 50px"}
                    width={"100%"}
                    height={"50px"}
                    disabled={!saveButtonState?.isActive}
                    color={saveButtonState?.textColor}
                    backgroundColor={saveButtonState?.backgroundColor}
                    borderRadius={"15px"}
                    handleClick={
                        clickSaveButton({
                            dispatch, modalForm, filter, order,
                            paginationQuantity, searchBarValue
                        })
                    }
                >
                    <Text tag={"span"} text={saveButtonState?.text}/>
                </Button>
            </VStack>
        </Div>
    );
};

export default ModalWindowContent;