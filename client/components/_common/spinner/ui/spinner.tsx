import cls from "./spinner.module.scss"
const Spinner = () => {
    return (
        <div className={cls["lds-roller"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export {Spinner};