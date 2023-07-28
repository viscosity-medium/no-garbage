import {MainPageGoals} from "../../../_layout/layout/model/layout.slice";
import {ReactNode} from "react";

export interface IGoalsItemInternal {
    number: string,
    descriptionText: string
    width?: string
    height?: string
}

export interface IGoalsItem extends  IGoalsItemInternal {
    children?: ReactNode
    margin?: string
    backgroundImage: string
}

export interface IGoals {
    goals?: MainPageGoals
    width?: string
}