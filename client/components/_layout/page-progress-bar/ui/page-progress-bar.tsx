import NextNProgress from 'nextjs-progressbar';
import colors from "../../../../styles/globals/colors";

export const PageProgressBar = () => {
    return <NextNProgress height={6} color={colors.mediumGrey} showOnShallow={true} />;
}