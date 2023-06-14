import {changeModalForm, clickSaveButton, hideModalWindow, initializeModalForm} from "../../model/moderation-location-info-sidebar.helpers";
import {getModalContent, getSaveButtonState} from "../../model/moderation-location-info-sidebar.selectors";
import {useSelector} from "react-redux";
import {FC, ReactNode, useEffect, useState} from 'react';
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
import {getFilterValue, getOrderValue} from "../../../../_common/filter-switcher/filter-switch.selectors";
import {getPaginationQuantity} from "../../../pagination-panel/pagination.selectors";
import {getSearchBarValue} from "../../../data-window/data-window.selectors";

interface IModalWindowContent {
    children?: ReactNode
}

const ModalWindowContent: FC<IModalWindowContent> = () => {

    const paginationQuantity = useSelector(getPaginationQuantity);
    const saveButtonState = useSelector(getSaveButtonState);
    const searchBarValue = useSelector(getSearchBarValue);
    const content = useSelector(getModalContent);
    const filter = useSelector(getFilterValue);
    const order = useSelector(getOrderValue);

    const location = content?.location;
    const photos = content?.photos?.map((photoObject: any) => photoObject);

    const dispatch = useAppDispatch();
    const [modalForm, setModalForm] = useState(initializeModalForm({content}));

    useEffect(()=>{
        setModalForm(initializeModalForm({content}))
    },[content])

    return (
        <VStack
            position={"relative"}
            padding={"0 30px"}
        >
            <Div
                position={"sticky"}
                top={"0"}
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
                        border={"0 solid #000"}
                        margin={"20px 0 15px auto"}
                        onClick={hideModalWindow({dispatch})}
                    >
                        <CrossIcon/>
                    </Button>
                </HStack>
            </Div>
            <VStack
                margin={"20px 0 0 "}
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
                onClick={
                    clickSaveButton({
                        dispatch, modalForm, filter, order,
                        paginationQuantity, searchBarValue
                    })
                }
            >
                <Text
                    tag={"span"}
                    text={saveButtonState?.text}
                    color={colors.white}
                />
            </Button>
        </VStack>
    );
};

export {ModalWindowContent};