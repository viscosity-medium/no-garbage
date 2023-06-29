import {changeModalForm, clickSaveButton, hideModalWindow} from "../../model/moderation-location-info-sidebar.helpers";
import {getModalContent, getSaveButtonState} from "../../model/moderation-location-info-sidebar.selectors";
import {useSelector} from "react-redux";
import {FC, ReactNode, useEffect, useState} from 'react';
import ModerationCaseProperties from "../moderation-case-properties/moderation-case-properties";
import ModalMediaBlock from "../results/modal-media-block";
import CrossIcon from "public/assets/common/cross-icon.svg"
import {Button} from "../../../../_common/button";
import MeetUp from "../meet-up/meet-up";
import {HStack, VStack} from "../../../../_common/flex-stack";
import colors from "../../../../../styles/globals/colors";
import {Div} from "../../../../_common/custom-image/ui/custom-div.styled";
import {Text} from "../../../../_common/text";
import {useAppDispatch} from "../../../../../store/store";
import {getFilterValue, getOrderValue} from "../../../../_common/filter-switch/model/filter-switch.selectors";
import {getCurrentPage, getPaginationQuantity} from "../../../pagination-panel/model/pagination.selectors";
import {
    getFirstVisibleDoc,
    getLastVisibleDoc,
    getSearchBarValue
} from "../../../data-window/model/data-window.selectors";

interface IModalWindowContent {
    children?: ReactNode
}

const ModalWindowContent: FC<IModalWindowContent> = () => {

    const dispatch = useAppDispatch();
    const [media, setMedia] = useState<string[]>([])
    const currentPage = useSelector(getCurrentPage);
    const paginationQuantity = useSelector(getPaginationQuantity);
    const saveButtonState = useSelector(getSaveButtonState);
    const firstDoc = useSelector(getFirstVisibleDoc);
    const lastDoc = useSelector(getLastVisibleDoc);
    const searchBarValue = useSelector(getSearchBarValue);
    const modalForm = useSelector(getModalContent);
    const filter = useSelector(getFilterValue);
    const order = useSelector(getOrderValue);
    const location = modalForm?.location;

    // useEffect(()=>{
    //     dispatch(moderationLocationInfoSidebarSliceActions.setContent(initializeModalForm({content})));
    // },[content]);


    useEffect(()=>{

        const photos = modalForm?.photos || [];
        const videos = modalForm?.videos || [];
        const newMedia = [...photos, ...videos];

        setMedia(newMedia);

    },[modalForm]);

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
                <ModalMediaBlock
                    media={media}
                />
            </VStack>
            <ModerationCaseProperties
                modalForm={modalForm}
                changeModalForm={
                    changeModalForm({dispatch, modalForm})
                }
            />
            <MeetUp
                location={location}
                modalForm={modalForm}
                changeModalForm={
                    changeModalForm({dispatch, modalForm})
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
                        dispatch, modalForm, filter, order, firstDoc,
                        paginationQuantity, searchBarValue, lastDoc, currentPage
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