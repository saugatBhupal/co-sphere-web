import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../constants/FontSize";
import { calculateTimeDifference } from "../../../utils/date/CalculateTimeDifference";
import CancelButtonRound from "../../buttons/CancelButton";
import TickButtonRound from "../../buttons/TickButtonRound";
import ProfileIcon from "../../icon/ProfileIcon";

const Wrapper = styled.div`
  max-width: 100%;
  max-height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.greyOutlineShadow};
  padding: 20px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 5px;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  b {
    font-size: ${FontSize.medium};
  }
  a {
    font-size: ${FontSize.extraSmall};
    color: ${Colors.greyOutline};
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  gap: 10px;
  span {
    color: ${Colors.greyOutline};
    font-size: ${FontSize.small};
  }
`;
function UnselectedApplicantProfileWidget({ applicant, onAccept, onReject }) {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/profile/${applicant.user._id}`)}>
      <Container>
        <Flex>
          <ProfileIcon url={applicant.user.profileImage} height={"50px"} />
          <Right>
            <b>{applicant.user.fullname}</b>
            <a>{calculateTimeDifference(applicant.date)}</a>
          </Right>
        </Flex>
        <Column>
          <Flex>
            <TickButtonRound
              onClick={(e) => {
                e.stopPropagation();
                onAccept();
              }}
            />
            <div style={{ width: "10px" }}></div>
            <CancelButtonRound />
          </Flex>
          <span>Tap to view profile</span>
        </Column>
      </Container>
    </Wrapper>
  );
}

export default UnselectedApplicantProfileWidget;
