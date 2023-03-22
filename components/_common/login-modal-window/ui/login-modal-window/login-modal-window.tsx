import {ModalWindowBackgroundStyled} from "../../../../_moderation/modal/modal-window/modal-window-background.styled";
import {LoginModalWindowStyled} from "./login-modal-window.styled";
import {useCloseModalOnEscape} from "../../../../../hooks/use-close-modal-on-escape";
import {getLoginVisibility} from "../../model/login-modal-window.selectors";
import {loginModalActions} from "../../model/login-modal-window.slice";
import {useAppDispatch} from "../../../../../store/store";
import {useSelector} from "react-redux";
import LoginForm from "../login-form/login-form";
import CrossSvg from "public/assets/common/cross-icon.svg";
import Button from "../../../button/button";
import VStack from "../../../flex-stack/v-stack/v-stack";
import colors from "../../../../../styles/globals/colors";
import LoginContent from "../login-content/login-content";

const LoginModalWindow = () => {

    const modalIsVisible = useSelector(getLoginVisibility);
    const modalOpacity = modalIsVisible ? 1 : 0;
    const modalZIndex = modalIsVisible ? 20 : -1;
    const dispatch = useAppDispatch();

    const hideLoginModal = () => {
        dispatch(loginModalActions.setModalVisibility());
    };

    const onEscapeDown = (e) => {
        if(e.key === "Escape"){
            dispatch(loginModalActions.setModalVisibility());
        }
    };

    useCloseModalOnEscape(onEscapeDown);

    return (
        <ModalWindowBackgroundStyled
            className={"moderation-modal-window"}
            background={colors.modalBackground}
            visibility={"visible"}
            opacity={modalOpacity}
            height={"100vh"}
            zIndex={modalZIndex}
        >
            <LoginModalWindowStyled>
                <VStack
                    justify={"space-between"}
                    height={"100%"}
                >
                    <Button
                        position={"absolute"}
                        right={"0"}
                        width={"18px"}
                        height={"18px"}
                        backgroundImage={CrossSvg.src}
                        margin={"0 0 0 auto"}
                        handleClick={hideLoginModal}
                    />
                    <LoginContent/>
                </VStack>
            </LoginModalWindowStyled>
        </ModalWindowBackgroundStyled>
    );
};

export { LoginModalWindow };