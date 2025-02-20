import React from "react";
import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../constants/FontSize";
import ProfileIcon from "../../icon/ProfileIcon";
import PriceChip from "../chip/PriceChip";

const Wrapper = styled.div`
  background-color: ${Colors.justWhite};
  border-radius: 16px;
  margin: 20px auto;
  padding: 10px 20px;
  cursor: pointer;
  border: 0.5px solid ${Colors.greyOutlineShadow};
  box-shadow: 1px 5px 40px -30px rgba(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 1px 5px 40px -20px rgba(49, 49, 49, 0.354);
  }
`;
const Container = styled.div`
  /* height: 120px; */
`;
const Top = styled.div`
  z-index: 20;
  div {
    align-items: center;
    justify-content: left;
  }
  a {
    font-size: ${FontSize.tiny};
    color: ${Colors.subtitleBlack};
  }
  img {
    border-radius: 50%;
    margin-right: 5px;
  }
`;
const Line = styled.div`
  width: 1px;
`;
const Stats = styled.div`
  border-top: 1px solid ${Colors.greyOutlineShadow};
  margin-top: 10px;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    font-size: ${FontSize.extraSmall};
    padding: 15px 0px;
    padding-bottom: 0px;
  }
  li {
    margin-right: 5px;
    font-weight: 400;
    padding-left: 12px;
    color: ${Colors.subtitleBlack};
    border-left: 1px solid ${Colors.greyOutlineShadow};
  }
  li:first-child {
    padding-left: 0px;
    border-left: none;
  }
`;
const Stat = styled.div`
  b {
    font-size: ${FontSize.medium};
    color: ${Colors.justBlack};
    font-weight: 400;
  }
`;
const Price = styled.div`
  align-self: flex-end;
  height: 10px;

  svg {
    fill: ${Colors.subtitleBlack};
    &:hover {
      fill: ${Colors.justBlack};
    }
  }
`;

const Flex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${FontSize.medium};
`;
const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function ApplicationsCreatedByMeWidget({ project }) {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Price>
            <PriceChip min={project.salary.min} max={project.salary.max} />
          </Price>
          <Top>
            <Flex>
              <ProfileIcon
                url={project.postedBy.profileImage}
                height={"50px"}
              />
              <div>
                <div>Assignment Helper Needed</div>
                <a>Posted on 10-11-2025</a>
              </div>
            </Flex>
          </Top>

          <Stats>
            <ul>
              <li>
                <Stat>
                  <b>20</b>
                  <br />
                  <a>Applicants</a>
                </Stat>
              </li>
              <li>
                <Stat>
                  <b>36</b>
                  <br />
                  <a>Likes</a>
                </Stat>
              </li>
              <li>
                <Stat>
                  <b>13</b>
                  <br />
                  <a>Rejected</a>
                </Stat>
              </li>
              <li>
                <Stat>
                  <b>7</b>
                  <br />
                  <a>Hired</a>
                </Stat>
              </li>
            </ul>
          </Stats>
        </Column>
      </Container>
    </Wrapper>
  );
}

export default ApplicationsCreatedByMeWidget;
