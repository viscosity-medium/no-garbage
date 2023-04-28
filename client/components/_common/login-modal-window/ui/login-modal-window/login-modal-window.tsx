import {
    ModalWindowBackgroundStyled
} from "../../../location-info-sidebar/ui/modal-window-background.styled";
import {LoginModalWindowStyled} from "./login-modal-window.styled";
import {useCloseModalOnEscape} from "../../../../../hooks/use-close-modal-on-escape";
import {getLoginVisibility} from "../../model/login-modal-window.selectors";
import {loginFormHelpers} from "../../model/login-form.helpers";
import {useSelector} from "react-redux";
import CrossSvg from "public/assets/common/cross-icon.svg";
import Button from "../../../button/button";
import VStack from "../../../flex-stack/v-stack/v-stack";
import colors from "../../../../../styles/globals/colors";
import LoginContent from "../login-content/login-content";

const LoginModalWindow = () => {

    const loginModalIsVisible = useSelector(getLoginVisibility);
    const modalOpacity = loginModalIsVisible ? 1 : 0;
    const modalZIndex = loginModalIsVisible ? 20 : -1;

    const {
        onEscapeDown,
        hideLoginModal
    } = loginFormHelpers({});

    useCloseModalOnEscape({
        executionFunction: onEscapeDown(loginModalIsVisible),
        deps: [loginModalIsVisible]
    });

    return (
        <ModalWindowBackgroundStyled
            className={"moderation-moderationLocationInfoSidebarSlice-window"}
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