import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../constants/FontSize";
import TextAreaFilledButton from "../../buttons/TextAreaFilledButton";
import TextAreaOutlinedButton from "../../buttons/TextAreaOutlinedButton";

const InputWrapper = styled.div`
  /* position: relative; */
  max-height: 300px;
  min-height: 150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 10px 5px;
  border-radius: 8px;
  border: 0.5px solid ${Colors.greyOutlineShadow};
`;

const StyledInput = styled.textarea`
  box-sizing: border-box;
  border: none;
  border-radius: 12px;
  resize: none;
  outline: none;
  min-height: 150px;
  height: inherit;
  font-size: ${FontSize.medium};
  font-weight: 300;
  color: ${Colors.subtitleBlack};
  text-align: justify;
  &::placeholder {
    font-size: ${FontSize.medium};
    font-weight: 200;
  }
`;

const CharacterCount = styled.div`
  text-align: right;
  font-size: ${FontSize.small};
  padding: 5px 10px;
  color: ${Colors.subtitleBlack};
`;

const ButtonGroup = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
`;
const Bottom = styled.div`
  align-self: flex-end;
`;

function TextAreaWithWordCount(props) {
  const [text, setText] = useState("");
  const maxChars = 500;
  useEffect(() => {
    props.value && setText(props.value);
  }, [props]);
  return (
    <InputWrapper>
      <StyledInput
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          props.onChange(e.target.value);
        }}
        maxLength={maxChars}
        placeholder={props.placeholder}
      />
      <Bottom>
        <CharacterCount>
          {text.length}/{maxChars}
        </CharacterCount>
        <ButtonGroup>
          <TextAreaOutlinedButton placeholder={"Cancel"} />
          <TextAreaFilledButton placeholder={"Save"} />
        </ButtonGroup>
      </Bottom>
    </InputWrapper>
  );
}

export default TextAreaWithWordCount;
