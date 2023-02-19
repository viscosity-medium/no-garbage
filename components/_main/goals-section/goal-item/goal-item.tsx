import React, {FC, ReactNode} from 'react';
import HStack from "../../../_common/flex-stack/h-stack/h-stack";
import CustomImage from "../../../_common/custom-image/custom-image";
import GoalsItemInternal, {IGoalsItemInternal} from "./goals-item-internal/goals-item-internal";

interface IGoalsItem extends  IGoalsItemInternal {
    backgroundImage: string
    children?: ReactNode
}
const GoalItem: FC<IGoalsItem> = ({
    backgroundImage,
    width,
    height,
    children
}) => {
    return (
       <HStack
           align={"center"}
           justify={"space-between"}
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