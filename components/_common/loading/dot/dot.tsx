import React, {FC} from 'react';
import cls from "./dot.module.scss"

const Dot: FC<{dotClass: string}> = ({dotClass}) => {

    return (
        <div className={`${cls["loading-dot"]} ${dotClass}`}/>
    )

};

export default Dot;