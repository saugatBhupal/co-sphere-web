import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../constants/Colors";
import { FontSize } from "../../constants/FontSize";
import { handleValidation } from "../../utils/validators/HandleValidation";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Icon = styled.div`
  position: absolute;
  img {
    height: 20px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 25px;
  font-size: ${FontSize.medium};
  border: 1px solid ${Colors.greyOutline};
  border-radius: 12px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
  background: transparent;
  border-color: ${({ validationMessage }) =>
    validationMessage == null || validationMessage === ""
      ? `${Colors.greyOutline}`
      : `#d3675a`};
  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -8px;
    left: 20px;
    font-size: 12px;
    color: ${Colors.subtitleBlack};
    padding: 0 5px;
  }
`;

const Hidden = styled.div`
  color: #d3675a;
  text-align: left;
  padding: 2px 20px;
  font-size: 12px;
`;

const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: ${FontSize.small};
  color: #4c4c4ca8;
  background-color: ${Colors.justWhite};
  pointer-events: none;
  transition: all 0.3s ease;
`;

function SquareBorderInputBar(props) {
  const [validationMessage, setValidationMessage] = useState("");
  const [input, setInput] = useState("");

  const getValdiationMessage = (value) => {
    setInput(value);
    let message = handleValidation(value, props.validationType);
    setValidationMessage(message);
    props.isValid(message == null);
  };

  return (
    <Wrapper>
      <Icon>{/* <img src={Logo} alt="" /> */}</Icon>
      <Input
        type={props.type ? props.type : "text"}
        placeholder=" "
        id="input-bar"
        value={props.value ? props.value : input}
        onChange={(e) => {
          props.onChange && props.onChange(e.target.value);
          props.validationType && getValdiationMessage(e.target.value);
        }}
        validationMessage={props.validationType && validationMessage}
      />
      <Label htmlFor="input-bar">{props.placeholder}</Label>
      <Hidden>{validationMessage && <>{validationMessage}</>}</Hidden>
    </Wrapper>
  );
}

export default SquareBorderInputBar;
