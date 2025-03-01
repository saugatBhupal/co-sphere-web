import React from "react";
import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../constants/FontSize";
import { calculateTimeBetween } from "../../../utils/date/CalculateTimeBetween";

const Wrapper = styled.div`
  background-color: ${Colors.justWhite};
  border-radius: 16px;
  margin: 20px auto;
  margin-right: 0px;
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
    height: 30px;
    width: 30px;
    object-fit: cover;
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
    font-size: ${FontSize.extraSmall};
  }
  li:first-child {
    padding-left: 0px;
    border-left: none;
    b {
      color: #d83538 !important;
    }
  }
`;
const Stat = styled.div`
  b {
    font-size: ${FontSize.small};
    color: ${Colors.justBlack};
    font-weight: 400;
  }
`;
const Dot = styled.div`
  align-self: flex-end;
  height: 10px;
  z-index: 99;

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
  img {
    height: 32px;
    margin-right: 8px;
  }
`;
const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
function TasksAssignedToMeWidget({ task }) {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Dot>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.20039 3.00001C5.20039 4.32549 4.12587 5.40001 2.80039 5.40001C1.47491 5.40001 0.400391 4.32549 0.400391 3.00001C0.400391 1.67452 1.47491 0.600006 2.80039 0.600006C4.12587 0.600006 5.20039 1.67452 5.20039 3.00001Z" />
              <path d="M12.4004 3.00001C12.4004 4.32549 11.3259 5.40001 10.0004 5.40001C8.67491 5.40001 7.60039 4.32549 7.60039 3.00001C7.60039 1.67452 8.67491 0.600006 10.0004 0.600006C11.3259 0.600006 12.4004 1.67452 12.4004 3.00001Z" />
              <path d="M19.6004 3.00001C19.6004 4.32549 18.5259 5.40001 17.2004 5.40001C15.8749 5.40001 14.8004 4.32549 14.8004 3.00001C14.8004 1.67452 15.8749 0.600006 17.2004 0.600006C18.5259 0.600006 19.6004 1.67452 19.6004 3.00001Z" />
            </svg>
          </Dot>
          <Top>
            <Flex>
              <div>
                <img src={task.postedBy.profileImage} alt="" />
              </div>
              <div>
                <div>{task.taskName}</div>
                <a>{task.createdAt}</a>
              </div>
            </Flex>
          </Top>

          <Stats>
            <ul>
              <li>
                <Stat>
                  <b>{calculateTimeBetween(task.createdAt, task.deadline)}</b>
                  <br />
                  <a>Remaining</a>
                </Stat>
              </li>
              <li>
                <Stat>
                  <b>{calculateTimeBetween(task.createdAt)}</b>
                  <br />
                  <a>Time spent</a>
                </Stat>
              </li>
              <li>
                <Stat>
                  <b>{task.status}</b>
                  <br />
                  <a>Status</a>
                </Stat>
              </li>
            </ul>
          </Stats>
        </Column>
      </Container>
    </Wrapper>
  );
}

export default TasksAssignedToMeWidget;
