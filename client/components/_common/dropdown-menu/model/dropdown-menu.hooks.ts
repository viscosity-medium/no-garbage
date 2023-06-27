import {useEffect, useState} from "react";
import {batch} from "react-redux";

export const useControlDropDown = ({
    items,
    buttonSideSize,
    setSelectedProperty
}) => {

    const borderWidth = 2;
    const [dropdownState, setDropDownState] = useState<boolean>(false);
    const [stackLongDimension, setStackLongDimension] = useState<string>("0");
    const [elementOpacity, setElementOpacity] = useState<number>(0);

    const switchDropDownState = () => {
        setDropDownState(prevState => !prevState);
    };

    const chooseCurrentItem = (item) => () =>{
        batch(()=>{
            setSelectedProperty(item);
            switchDropDownState();
        })
    };

    useEffect(()=> {
        dropdownState ? setStackLongDimension(`${items.length * buttonSideSize}px`) : setStackLongDimension("0");
        dropdownState ? setElementOpacity(1) : setElementOpacity(0);
    },[dropdownState]);

    return{
        borderWidth,
        dropdownState,
        stackLongDimension,
        elementOpacity,
        switchDropDownState,
        chooseCurrentItem
    }
}