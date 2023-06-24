import {FC} from 'react';
import Dot from "./dot/dot";
import cls from "./loading.module.scss";
import clsSub from "./dot/dot.module.scss";
const Loading: FC = () => {

    return (
        <div className={cls.loading}>
            <div className={cls["contour-wrapper"]}>
                <Dot dotClass={clsSub.dot1}/>
                <Dot dotClass={clsSub.dot2}/>
                <Dot dotClass={clsSub.dot3}/>
                <Dot dotClass={clsSub.dot4}/>
                <Dot dotClass={clsSub.dot5}/>
                <Dot dotClass={clsSub.dot6}/>
                <div className={cls.contour}>
                </div>
            </div>
            <h4 className={cls["loading-text"]}>Страница загружается</h4>
        </div>

    );

};

export {Loading};