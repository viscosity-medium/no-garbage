import {getModalContent, getSaveButtonState} from "../modal-selectors";
import {batch, useDispatch, useSelector} from "react-redux";
import {FC, useEffect, useState} from 'react';
import ModerationCaseProperties from "../case/moderation-case-properties/moderation-case-properties";
import ModalPhotoBlock from "../results/modal-photo-block";
import {modalActions} from "../modal.slice";
import CrossIcon from "public/assets/common/cross-icon.svg"
import VStack from "../../../_common/flex-stack/v-stack/v-stack";
import Button from "../../../_common/button/button";
import MeetUp from "../meet-up/meet-up";
import HStack from "../../../_common/flex-stack/h-stack/h-stack";
import colors from "../../../../styles/globals/colors";
import {Div} from "../../../_common/custom-image/custom-div.styled";
import Text from "../../../_common/text/text";
import {initializeModalForm} from "../initialize-modal-form";
import {updateFirebaseReport} from "../../../../firebase/update-firebase-report";
import {useAppDispatch} from "../../../../store/store";
import {getFilterValue, getOrderValue} from "../../../_common/filter-switcher/filter-switch-selectors";
import {getPaginationQuantity} from "../../pagination-panel/pagination-selectors";
import {getSearchBarValue} from "../../data-window/data-window-selectors";
import {fetchFirebaseReports} from "../../data-window/data-window-slice";

interface IModalWindowContent {
    visibility: boolean
    modalWindowHeight?: string
}

interface  IPhotoObject {
    url?: string
}
const ModalWindowContent: FC<IModalWindowContent> = ({visibility, modalWindowHeight}) => {

    const right = visibility ? "0" : "-460px";
    const dispatch = useAppDispatch();
    const filter = useSelector(getFilterValue);
    const order = useSelector(getOrderValue);
    const paginationQuantity = useSelector(getPaginationQuantity);
    const searchBarValue = useSelector(getSearchBarValue);
    const content = useSelector(getModalContent);
    const saveButtonState = useSelector(getSaveButtonState);
    const photos = content?.photos?.map((photoObject: any) => photoObject?.url);
    const location = content?.location;

    const hideModalWindow = () => {

        batch(()=>{
            dispatch(modalActions.setVisibility());
            dispatch(modalActions.setChosenPhoto(undefined));
            dispatch(modalActions.setSaveButtonState({
                text: "Edit form to save changes",
                isActive: false,
                textColor: colors.white,
                backgroundColor: colors.tableCellBorder
            }))
        });

    };

    const [modalForm, setModalForm] = useState(initializeModalForm({content}));

    const changeModalForm = (changedValue) => (event) => {

        setModalForm({
            ...modalForm,
            isChanged: true,
            [changedValue]: event
        });

        dispatch(modalActions.setSaveButtonState({
            text: "Save changes",
            isActive: true,
            textColor: colors.white,
            backgroundColor: colors.orange
        }));

    }

    const clickSaveButton = async () => {

        await updateFirebaseReport({ modalForm })
        await dispatch(fetchFirebaseReports({filter, order, paginationQuantity, searchBarValue}));
        dispatch(modalActions.setSaveButtonState({
            text: "Changes saved!",
            isActive: false,
            textColor: colors.white,
            backgroundColor: colors.veryDarkGreen
        }));
    }

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
                            handleClick={hideModalWindow}
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
                    changeModalForm={changeModalForm}
                />
                <MeetUp
                    location={location}
                    modalForm={modalForm}
                    changeModalForm={changeModalForm}
                />
                <Button
                    margin={"10px 0 50px"}
                    width={"100%"}
                    height={"50px"}
                    disabled={!saveButtonState?.isActive}
                    color={saveButtonState?.textColor}
                    backgroundColor={saveButtonState?.backgroundColor}
                    borderRadius={"15px"}
                    handleClick={clickSaveButton}
                >
                    <Text tag={"span"} text={saveButtonState?.text}/>
                </Button>
            </VStack>
        </Div>
    );
};

export default ModalWindowContent;