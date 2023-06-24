import {VStack} from "../../../../_common/flex-stack";
import {Text} from "../../../../_common/text";
import {FC, ReactNode} from "react";

interface StepBlockProps {
    title: string
    description: string
    children: ReactNode
}

const StepBlock: FC<StepBlockProps> = ({title, description, children}) => {
    return (
        <VStack
            margin={"24px 0 0"}
        >
            <Text
                tag={"h3"}
                size={"16px"}
            >
                {title}
            </Text>
            <Text
                tag={"h3"}
                size={"16px"}
                margin={"8px 0"}
            >
                {description}
            </Text>
            {children}
        </VStack>
    );
};

export { StepBlock };