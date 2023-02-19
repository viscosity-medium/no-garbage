import React from 'react';
import Text from "../../../../_common/text/text";
import HStack from "../../../../_common/flex-stack/h-stack/h-stack";
import VStack from "../../../../_common/flex-stack/v-stack/v-stack";
import {useSelector} from "react-redux";
import {getModalContent} from "../../modal-selectors";
import TableCellContentWrapper
    from "../../../data-table/table-cell/table-cell-content-wrapper/table-cell-content-wrapper";

const ModerationCaseProperties = () => {
    const content = useSelector(getModalContent);
    return (
        <>
            <Text
                text={content?.description || ""}
                tag={"h3"}
            />
            <HStack
                margin={"40px 0 0 "}
                position={"relative"}
                height={"120px"}
            >
                <VStack
                    position={"relative"}
                    justify={"space-between"}
                    width={"auto"}
                    grow={0}
                >
                    <Text tag={"span"} text={"Status"}/>
                    <Text tag={"span"} text={"Announcement"}/>
                    <Text tag={"span"} text={"Date"}/>
                    <Text tag={"span"} text={"Reported by"}/>
                </VStack>
                <VStack
                    justify={"space-between"}
                    margin={"0 0 0 40px"}
                >
                    <TableCellContentWrapper text={content?.status} display={"block"} textAlign={"center"}/>
                    <Text tag={"span"} text={content?.announcement || ""}/>
                    <Text tag={"span"} text={content?.created || ""}/>
                    <Text tag={"span"} text={"Reported by"}/>
                </VStack>
            </HStack>
        </>
    );
};

export default ModerationCaseProperties;