import React from "react";
import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../constants/FontSize";
import ProfileIcon from "../../icon/ProfileIcon";

const Wrapper = styled.div`
  height: 85px;
  width: 100%;
  border: 0.5px solid ${Colors.greyOutlineShadow};
  cursor: pointer;
`;
const Container = styled.div`
  height: inherit;
  width: calc(100% - 4px);
  border-right: ${({ seen }) =>
    seen ? ` 4px solid transparent` : `4px solid ${Colors.strokeBlue}`};
  background-color: ${({ seen }) =>
    seen ? `transparent` : `${Colors.menuSelected}`};
  &:hover {
    background-color: ${Colors.menuSelected};
  }
`;

const Flex = styled.div`
  padding: 15px;
  padding-top: 12px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Message = styled.div`
  padding: 0px 25px;
  font-size: ${FontSize.medium};
  color: ${Colors.subtitleBlack};
  font-weight: 200;
`;
const Name = styled.div`
  font-weight: 400;
  margin-left: 5px;
  font-size: ${FontSize.medium};
`;
const Time = styled.div`
  color: ${Colors.subtitleBlack};
  font-size: ${FontSize.small};
  font-weight: 200;
`;

function ChatCard({ seen }) {
  return (
    <Wrapper>
      <Container seen={seen}>
        <Flex>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ProfileIcon height={"30px"} />
            <Name>Lexi Anderson</Name>
          </div>
          <Time> 1h</Time>
        </Flex>
        <Message>Thank you! I will see you tomorrow....</Message>
      </Container>
    </Wrapper>
  );
}

export default ChatCard;
