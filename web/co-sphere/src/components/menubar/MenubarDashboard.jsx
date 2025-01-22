import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../constants/Colors";
import MessageIcon from "../icon/MessageIcon";
import NotificationIcon from "../icon/NotificationIcon";
import SearchInputMenubar from "../input/search/SearchInputMenubar";
import ProfileWidgetMenubar from "../widget/profile/ProfileWidgetMenubar";
import MessageMenubarDashboard from "./MessageMenubarDashboard";

const Wrapper = styled.div`
  z-index: 99 !important;
  height: 70px;
  width: inherit;
  background-color: ${Colors.justWhite};
  border-bottom: 1px solid ${Colors.greyOutlineShadow};
  border-left: 1px solid ${Colors.greyOutlineShadow};
  position: fixed;
`;
const Container = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  background-color: transparent;
  display: flex;
  width: 220px;
  justify-content: space-between;
  margin-right: 60px;
`;

const BrowseIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    height: 24px;
    width: 24px;
  }
  &:hover {
    svg {
    }
  }
  svg {
    fill: ${Colors.mainBlue};
  }
`;
export default function MenubarDashboard() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <SearchInputMenubar />
        <Right>
          <MessageIcon
            onClick={() => {
              navigate("/chat");
            }}
          />
          <NotificationIcon>
            <svg
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.26678 17.48L3.90931 17.8669L3.91099 17.8641L3.26678 17.48ZM1.73345 20.0267L1.09093 19.6398L1.09081 19.64L1.73345 20.0267ZM3.17345 23.9333L2.933 24.6438L2.93578 24.6447L3.17345 23.9333ZM20.8668 23.9333L20.6314 23.2212L20.6291 23.222L20.8668 23.9333ZM22.3068 20.0267L22.9499 19.6408L22.9493 19.6398L22.3068 20.0267ZM20.7734 17.48L20.1237 17.8549L20.1309 17.8669L20.7734 17.48ZM14.4934 3.26667L14.2843 3.98693C14.5588 4.06661 14.8547 3.9834 15.0473 3.77235C15.24 3.5613 15.296 3.25909 15.1917 2.99301L14.4934 3.26667ZM13.2134 3L13.1204 3.74422L13.1232 3.74455L13.2134 3ZM9.56012 3.26667L8.86182 2.99301C8.75753 3.25913 8.81357 3.56139 9.00632 3.77244C9.19906 3.98349 9.49501 4.06664 9.76947 3.98686L9.56012 3.26667ZM12.0268 2.13C7.19924 2.13 3.27678 6.05246 3.27678 10.88H4.77678C4.77678 6.88088 8.02766 3.63 12.0268 3.63V2.13ZM3.27678 10.88V14.7333H4.77678V10.88H3.27678ZM3.27678 14.7333C3.27678 15.0496 3.20654 15.492 3.07911 15.9511C2.95174 16.4099 2.78395 16.8253 2.62257 17.096L3.91099 17.8641C4.16295 17.4414 4.37516 16.8901 4.52446 16.3523C4.67369 15.8147 4.77678 15.2304 4.77678 14.7333H3.27678ZM2.62426 17.0931L1.09093 19.6398L2.37598 20.4135L3.90931 17.8669L2.62426 17.0931ZM1.09081 19.64C0.511441 20.6029 0.396906 21.67 0.745119 22.6104C1.093 23.5499 1.87393 24.2853 2.933 24.6437L3.4139 23.2229C2.73964 22.9947 2.32723 22.5634 2.15178 22.0896C1.97666 21.6166 2.00879 21.0238 2.37609 20.4133L1.09081 19.64ZM2.93578 24.6447C8.8367 26.6162 15.2035 26.6162 21.1044 24.6447L20.6291 23.222C15.0367 25.0905 9.00353 25.0905 3.41112 23.222L2.93578 24.6447ZM21.1022 24.6454C23.1746 23.9604 24.0757 21.5171 22.9499 19.6408L21.6637 20.4125C22.2979 21.4696 21.7857 22.8397 20.6314 23.2212L21.1022 24.6454ZM22.9493 19.6398L21.416 17.0931L20.1309 17.8669L21.6643 20.4135L22.9493 19.6398ZM21.4231 17.1052C21.2652 16.8315 21.0995 16.4131 20.9734 15.9533C20.8471 15.4927 20.7768 15.0499 20.7768 14.7333H19.2768C19.2768 15.2301 19.3798 15.814 19.5268 16.35C19.6741 16.8869 19.8817 17.4352 20.1238 17.8548L21.4231 17.1052ZM20.7768 14.7333V10.88H19.2768V14.7333H20.7768ZM20.7768 10.88C20.7768 6.06579 16.841 2.13 12.0268 2.13V3.63C16.0126 3.63 19.2768 6.89422 19.2768 10.88H20.7768ZM14.7026 2.54641C14.2566 2.41695 13.7899 2.31439 13.3037 2.25545L13.1232 3.74455C13.517 3.79228 13.9036 3.87639 14.2843 3.98693L14.7026 2.54641ZM13.3065 2.25579C11.9309 2.08385 10.601 2.18305 9.35076 2.54648L9.76947 3.98686C10.8126 3.68363 11.936 3.59616 13.1204 3.74421L13.3065 2.25579ZM10.2584 3.54033C10.5356 2.83294 11.2239 2.33667 12.0268 2.33667V0.83667C10.5896 0.83667 9.35794 1.72707 8.86182 2.99301L10.2584 3.54033ZM12.0268 2.33667C12.8296 2.33667 13.5179 2.83294 13.7952 3.54033L15.1917 2.99301C14.6956 1.72707 13.4639 0.83667 12.0268 0.83667V2.33667ZM15.2768 24.4133C15.2768 26.1991 13.8126 27.6633 12.0268 27.6633V29.1633C14.641 29.1633 16.7768 27.0275 16.7768 24.4133H15.2768ZM12.0268 27.6633C11.1409 27.6633 10.316 27.2952 9.73045 26.7097L8.66979 27.7703C9.52426 28.6248 10.726 29.1633 12.0268 29.1633V27.6633ZM9.73045 26.7097C9.14492 26.1241 8.77678 25.2992 8.77678 24.4133H7.27678C7.27678 25.7142 7.81531 26.9159 8.66979 27.7703L9.73045 26.7097Z" />
            </svg>
          </NotificationIcon>
          <ProfileWidgetMenubar />
        </Right>
      </Container>
      <MessageMenubarDashboard />
    </Wrapper>
  );
}
