
type ColorDefiner = ({pathname}: {pathname: string}) => string

export const definePageProgressBarColor:ColorDefiner = ({pathname}) => {
    switch (pathname) {
        case "/":
            return "linear-gradient(45deg, #02AABD, #00CDAC)";
        case "/map":
            return "linear-gradient(102.4deg, rgb(253, 189, 85) 7.8%, rgb(249, 131, 255) 100.3%)";
        case "/moderation":
            return "linear-gradient(108.7deg, rgb(221, 22, 224) 11%, rgb(111, 22, 190) 88.2%)";
        default:
            return "linear-gradient(45deg, #02AABD, #00CDAC)"
    }
}