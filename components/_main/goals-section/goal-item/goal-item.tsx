import React, {FC, ReactNode} from 'react';
import HStack from "../../../_common/flex-stack/h-stack/h-stack";
import CustomImage from "../../../_common/custom-image/custom-image";
import GoalsItemInternal, {IGoalsItemInternal} from "./goals-item-internal/goals-item-internal";

interface IGoalsItem extends  IGoalsItemInternal {
    children?: ReactNode
    margin?: string
    backgroundImage: string
}
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