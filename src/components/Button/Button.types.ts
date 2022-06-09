import {  MouseEventHandler } from "react"
import { ButtonType, ButtonWidth, ButtonColor, ButtonColors } from "./button.constants"

export interface ButtonProps {
    text?: string,
    primary?:boolean,
    disabled?: boolean,
    width?: ButtonWidth,
    color?: typeof ButtonColors,
    onClick?: MouseEventHandler<HTMLButtonElement>
}