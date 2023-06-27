import NextNProgress from 'nextjs-progressbar';

export const PageProgressBar = ({progressBarColor}) => {
    return <NextNProgress height={6} color={progressBarColor} showOnShallow={true} />;
}