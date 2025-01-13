import React from "react";
import styled from "styled-components";
import EsewaLogo from "../../../assets/images/logo/esewa-logo.png";
import { Colors } from "../../../constants/Colors";
import TypeChip from "../chip/TypeChip";

const Wrapper = styled.div`
  background-color: ${Colors.justWhite};
  border-radius: 16px;
  margin: 20px;
  margin-right: 0px;
  padding: 20px;
  cursor: pointer;
  border: 0.5px solid ${Colors.greyOutlineShadow};
  box-shadow: 1px 5px 40px -30px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: ${Colors.menuSelected};
  }
`;
const Container = styled.div`
  height: 120px;
`;
const Top = styled.div`
  div {
    align-items: initial;
  }
  a {
    font-size: 12px;
    color: ${Colors.subtitleBlack};
  }
  img {
    height: 61px;
    border-radius: 8px;
    margin-right: 5px;
  }
`;
const Specifications = styled.div`
  ul {
    list-style: none;
    display: flex;
    font-size: 12px;
    padding: 0px;
  }
  li {
    margin-right: 5px;
    font-weight: 400;
    color: ${Colors.subtitleBlack};
  }
`;
const Location = styled.div`
  font-size: 12px;
  svg {
    margin-right: 6px;
  }
  div {
    font-weight: 500 !important;
    justify-content: left;
    align-items: center;
  }
`;
const Flex = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
function MyApplicationWidget({ status }) {
  return (
    <Wrapper>
      <Container>
        <Flex>
          <Column>
            <Top>
              <Flex>
                <div>
                  <img src={EsewaLogo} alt="" />
                </div>
                <div>
                  <a>Esewa</a>
                  <div>Product Designer</div>
                </div>
              </Flex>
            </Top>
            <Location>
              <Flex>
                <div>
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.50006 8.39375C7.57702 8.39375 8.45006 7.52071 8.45006 6.44375C8.45006 5.3668 7.57702 4.49375 6.50006 4.49375C5.42311 4.49375 4.55006 5.3668 4.55006 6.44375C4.55006 7.52071 5.42311 8.39375 6.50006 8.39375Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                    <path
                      d="M1.26256 5.30625C2.49381 -0.106249 10.5126 -0.0999984 11.7376 5.3125C12.4563 8.4875 10.4813 11.175 8.75006 12.8375C7.49381 14.05 5.50631 14.05 4.24381 12.8375C2.51881 11.175 0.543812 8.48125 1.26256 5.30625Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div>Kathmandu, Nepal</div>
              </Flex>
            </Location>
            <Specifications>
              <ul>
                <li>Remote</li>
                <li>Full-Time</li>
                <li>Company</li>
              </ul>
            </Specifications>
          </Column>
          <TypeChip type={status} />
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default MyApplicationWidget;
