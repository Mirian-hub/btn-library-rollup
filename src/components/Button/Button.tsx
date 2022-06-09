import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import "./Button.sass";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = ({text, primary,
    disabled,
    width,
    color,
    onClick}) => {
        const [count, setCount] = useState();
      return <button className={`${!primary && 'up-button-secondary'}`}>{text}</button>;
};

export default Button;
