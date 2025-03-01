import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../constants/Colors";
import { FontSize } from "../../../constants/FontSize";
import { getUserIdFromLocalStorage } from "../../../service/LocalStorageService";
import LogoMenu from "../../logo/LogoMenu";

const Wrapper = styled.div`
  height: 100vh;
  width: 220px;
  background-color: ${Colors.justWhite};
  border-right: 1px solid ${Colors.greyOutlineShadow};
  position: fixed;
`;
const Logo = styled.div`
  height: 50px;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${Colors.greyOutlineShadow};
  border-right: 1px solid ${Colors.greyOutlineShadow};
`;
const Container = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  flex-direction: column;
`;

const Menu = styled.div`
  background-color: white;
  flex-grow: 1;

  ul {
    margin-top: 40px;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      margin: 2px auto;
    }
  }
`;
const MenuItem = styled.li`
  list-style: none;
  font-size: ${FontSize.small};
  font-weight: 400;
  color: ${({ selected }) =>
    selected ? `${Colors.justBlack}` : `${Colors.menuUnselected}`};
  background-color: ${({ selected }) =>
    selected ? `${Colors.menuSelected}` : `auto`};
  stroke: ${({ selected }) =>
    selected ? `${Colors.justBlack}` : `${Colors.menuUnselected}`};
  width: 90%;
  margin: 10px auto;
  min-height: 40px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    color: ${Colors.justBlack};
    background-color: ${Colors.menuSelected};
    stroke: ${Colors.justBlack};
  }
  svg {
    margin: 0 20px 0 10px;
  }
`;
const End = styled.div`
  width: 100%;
  margin: auto;
  margin-top: auto;
  height: fit-content;
`;
const EndContainer = styled.div`
  height: 40px;
  width: 100%;
  border-top: 0.5px solid ${Colors.greyOutlineShadow};
  background-color: ${Colors.lightSelected};
  font-size: ${FontSize.small};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.menuSelected};
  }
  div {
    width: fit-content;
    margin: auto;
    margin-top: 12px;
    color: ${Colors.deepOrange};
    font-weight: 400;
  }
`;

function SideMenuBarDesktop(props) {
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserId() {
      const userId = await getUserIdFromLocalStorage();
      setUserId(userId);
    }
    getUserId();
  }, []);
  return (
    <Wrapper>
      <Logo>
        <LogoMenu />
      </Logo>
      <Container>
        <Menu>
          <MenuItem selected={props.current === "home"}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 6.25V16.75M6.25 11.5H16.75M8.35 22H14.65C19.9 22 22 19.9 22 14.65V8.35C22 3.1 19.9 1 14.65 1H8.35C3.1 1 1 3.1 1 8.35V14.65C1 19.9 3.1 22 8.35 22ZM9.4 16.75H13.6C15.3325 16.75 16.75 15.3325 16.75 13.6V9.4C16.75 7.6675 15.3325 6.25 13.6 6.25H9.4C7.6675 6.25 6.25 7.6675 6.25 9.4V13.6C6.25 15.3325 7.6675 16.75 9.4 16.75Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="/dashboard">Home</a>
          </MenuItem>
          <ul>
            <MenuItem selected={props.current === "profile"}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 6.25V16.75M6.25 11.5H16.75M8.35 22H14.65C19.9 22 22 19.9 22 14.65V8.35C22 3.1 19.9 1 14.65 1H8.35C3.1 1 1 3.1 1 8.35V14.65C1 19.9 3.1 22 8.35 22ZM9.4 16.75H13.6C15.3325 16.75 16.75 15.3325 16.75 13.6V9.4C16.75 7.6675 15.3325 6.25 13.6 6.25H9.4C7.6675 6.25 6.25 7.6675 6.25 9.4V13.6C6.25 15.3325 7.6675 16.75 9.4 16.75Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href={userId && `/profile/${userId}`}>Profile</a>
            </MenuItem>
            <MenuItem
              selected={props.current === "explore"}
              onClick={() => navigate("/explore")}
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 6.25V16.75M6.25 11.5H16.75M8.35 22H14.65C19.9 22 22 19.9 22 14.65V8.35C22 3.1 19.9 1 14.65 1H8.35C3.1 1 1 3.1 1 8.35V14.65C1 19.9 3.1 22 8.35 22ZM9.4 16.75H13.6C15.3325 16.75 16.75 15.3325 16.75 13.6V9.4C16.75 7.6675 15.3325 6.25 13.6 6.25H9.4C7.6675 6.25 6.25 7.6675 6.25 9.4V13.6C6.25 15.3325 7.6675 16.75 9.4 16.75Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a>Explore</a>
            </MenuItem>
            <MenuItem
              selected={props.current === "create"}
              onClick={() => navigate("/create")}
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 6.25V16.75M6.25 11.5H16.75M8.35 22H14.65C19.9 22 22 19.9 22 14.65V8.35C22 3.1 19.9 1 14.65 1H8.35C3.1 1 1 3.1 1 8.35V14.65C1 19.9 3.1 22 8.35 22ZM9.4 16.75H13.6C15.3325 16.75 16.75 15.3325 16.75 13.6V9.4C16.75 7.6675 15.3325 6.25 13.6 6.25H9.4C7.6675 6.25 6.25 7.6675 6.25 9.4V13.6C6.25 15.3325 7.6675 16.75 9.4 16.75Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a>Create </a>
            </MenuItem>
            <MenuItem selected={props.current === "tasks"}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 6.25V16.75M6.25 11.5H16.75M8.35 22H14.65C19.9 22 22 19.9 22 14.65V8.35C22 3.1 19.9 1 14.65 1H8.35C3.1 1 1 3.1 1 8.35V14.65C1 19.9 3.1 22 8.35 22ZM9.4 16.75H13.6C15.3325 16.75 16.75 15.3325 16.75 13.6V9.4C16.75 7.6675 15.3325 6.25 13.6 6.25H9.4C7.6675 6.25 6.25 7.6675 6.25 9.4V13.6C6.25 15.3325 7.6675 16.75 9.4 16.75Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a>Tasks</a>
            </MenuItem>
            <MenuItem selected={props.current === "assigned to me"}>
              <svg
                width="24"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.25"
                  x2="0.25"
                  y2="17"
                  stroke="#9199AF"
                  strokeWidth="0.5"
                />
              </svg>
              <a>Assigned To Me</a>
            </MenuItem>
            <MenuItem selected={props.current === "assigned by me"}>
              <svg
                width="24"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.25"
                  x2="0.25"
                  y2="17"
                  stroke="#9199AF"
                  strokeWidth="0.5"
                />
              </svg>

              <a>Assigned By Me</a>
            </MenuItem>
            <MenuItem selected={props.current === "jobs"}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 6.25V16.75M6.25 11.5H16.75M8.35 22H14.65C19.9 22 22 19.9 22 14.65V8.35C22 3.1 19.9 1 14.65 1H8.35C3.1 1 1 3.1 1 8.35V14.65C1 19.9 3.1 22 8.35 22ZM9.4 16.75H13.6C15.3325 16.75 16.75 15.3325 16.75 13.6V9.4C16.75 7.6675 15.3325 6.25 13.6 6.25H9.4C7.6675 6.25 6.25 7.6675 6.25 9.4V13.6C6.25 15.3325 7.6675 16.75 9.4 16.75Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a>Jobs</a>
            </MenuItem>
            <MenuItem selected={props.current === "created by me"}>
              <svg
                width="24"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.25"
                  x2="0.25"
                  y2="17"
                  stroke="#9199AF"
                  strokeWidth="0.5"
                />
              </svg>
              <a href="/created-by-me">Created By Me</a>
            </MenuItem>
            <MenuItem selected={props.current === "my applications"}>
              <svg
                width="24"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.25"
                  x2="0.25"
                  y2="17"
                  stroke="#9199AF"
                  strokeWidth="0.5"
                />
              </svg>

              <a href="/my-applications">My Applications</a>
            </MenuItem>
          </ul>
        </Menu>
        <End>
          <EndContainer>
            <div>Sign Out</div>
          </EndContainer>
        </End>
      </Container>
    </Wrapper>
  );
}

export default SideMenuBarDesktop;
