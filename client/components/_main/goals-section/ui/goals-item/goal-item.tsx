import React, {FC} from 'react';
import {HStack} from "../../../../_common/flex-stack";
import {CustomImage} from "../../../../_common/custom-image";
import {IGoalsItem} from "../../model/goals-section.types";

const GoalItem: FC<IGoalsItem> = ({
    backgroundImage,
    width,
    height,
    children,
    margin
}) => {
    return (
       <HStack
           align={"center"}
           justify={"space-between"}
           margin={margin}
       >
           <CustomImage
               position={"relative"}
               width={width!}
               height={height!}
               zIndex={1}
               backgroundImage={backgroundImage}
               borderRadius={"20px"}
           />
           {children}
       </HStack>
    );
};

export default GoalItem;