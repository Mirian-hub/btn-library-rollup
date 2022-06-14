import React, { FC, useEffect, useState } from "react";
import { ButtonProps } from "./Button.types";
import './Button.sass'

const Button: FC<ButtonProps> = ({text, primary,
    disabled,
    width,
    color,
    onClick}) => {
        const [count, setCount] = useState();
    //   return <button className={`${!primary && 'up-button-secondary'}`}>{text}</button>;
      return <button className='up-button up-button-secondary'>{text}</button>;
};

export default Button;
