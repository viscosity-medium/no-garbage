import {FC} from 'react';
import HStack from "../flex-stack/h-stack/h-stack";
import Button from "../button/button";
import VStack from "../flex-stack/v-stack/v-stack";
import Text from "../text/text";
import colors from "../../../styles/globals/colors";
import {NavButtonsProps} from "../nav-bar/nav-btns/nav-buttons";
import ProfileImage from "public/assets/main-page/logo.png"
import {batch, useSelector} from "react-redux";
import {getLoginData} from "../login-form/model/login-form.selectors";
import {getUserDataFromLocalStorage} from "../../../hooks/get-user-data-from-local-storage";
import {useLogOut} from "../../../utilities/use-log-out";
import {loginFormActions} from "../login-form/model/login-form.slice";
import {useAppDispatch} from "../../../store/store";
import {useRouter} from "next/router";



const Profile: FC<NavButtonsProps> = ({fontColor}) => {

    const {route, push} = useRouter();
    const dispatch = useAppDispatch();
    const userData = getUserDataFromLocalStorage();

    const onLogout = () => {
        if( typeof window !== undefined){
            localStorage.removeItem("email");
            localStorage.removeItem("password");
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        }
        batch(()=>{
            dispatch(loginFormActions.setLoginFormEmail(""));
            dispatch(loginFormActions.setLoginFormPassword(""));
            dispatch(loginFormActions.setLoginFormData(""));
            dispatch(loginFormActions.setLoginFormStatus("not-authenticated"))
        })

        if(route === "/moderation") {
            (async()=>{
                await push("/")
            })()
        }
    }

    return (
        <HStack
            align={"center"}
        >
            <Button
                backgroundImage={ProfileImage.src}
                backgroundColor={colors.white}
                width={"48px"}
                height={"48px"}
                borderRadius={"50%"}
            />
            <VStack
                margin={"0 0 0 20px"}
            >
                <Text
                    tag={"h3"}
                    text={userData?.email || ""}
                    color={fontColor}
                />
                <Text
                    margin={"4px 0 1px"}
                    tag={"span"}
                    text={"Community name"}
                    color={fontColor}
                />
                <Button
                    height={"auto"}
                    width={"70px"}
                    onClick={onLogout}
                >
                    <Text
                        display={"block"}
                        tag={"span"}
                        text={"Logout"}
                        size={"15px"}
                        width={"100%"}
                        textAlign={"left"}
                        color={fontColor}
                    />
                </Button>
            </VStack>
        </HStack>
    );
};

export default Profile;