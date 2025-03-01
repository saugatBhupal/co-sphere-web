import React, { useState } from "react";
import styled from "styled-components";
import LikeIcon from "../../components/icon/LikeIcon";
import LinkIcon from "../../components/icon/LinkIcon";
import MessageIcon from "../../components/icon/MessageIcon";
import ProfileIcon from "../../components/icon/ProfileIcon";
import ActionChip from "../../components/widget/chip/ActionChip";
import SkillChip from "../../components/widget/chip/SkillChip";
import SuccesssChip from "../../components/widget/chip/SuccesssChip";
import { Colors } from "../../constants/Colors";
import LoggedInUserLayout from "../common/LoggedInUserLayout";
import AboutSection from "./AboutSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import HistorySection from "./HistorySection";
import ReviewSection from "./ReviewSection";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 42px;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  width: calc(100% - 100px);
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 500px;
  justify-content: space-between;
`;
const Right = styled.div`
  flex: 1;
  max-width: 500px;
  margin-top: 50px;
`;
const Profile = styled.div`
  text-align: center;
  a {
    color: ${Colors.justBlack};
    font-size: 18px;
    font-weight: 400;
  }
`;
const Address = styled.div`
  color: ${Colors.subtitleBlack};
`;

const ActionsFlex = styled.div`
  width: 145px;
  ul {
    padding-left: 0px !important;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
  }
  li {
    font-weight: 500;
    color: ${Colors.subtitleBlack};
    list-style: none;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const SkillsWidget = styled.div`
  width: 100%;
  margin-left: 50px;
  a {
    text-align: left !important;
    font-size: 14px;
    font-weight: 600;
  }
  span {
    color: ${Colors.mainBlue};
  }
`;
const SkillsContainer = styled.div`
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  div {
    margin: 2px;
  }
`;
const TabContainer = styled.div`
  max-width: 450px;
  margin: auto;
  ul {
    display: flex;
    justify-content: space-between;
    padding-left: 0% !important;
  }
`;
const Li = styled.li`
  cursor: pointer;
  list-style: none;
  font-size: 16px;
  color: ${({ current }) =>
    current ? `${Colors.mainBlue}` : `${Colors.subtitleBlack}`};
  font-weight: ${({ current }) => (current ? `500` : `300`)};
`;
const ContentContainer = styled.div`
  max-width: 500px;

  margin: 20px;

  margin: 20px auto;
  background-color: ${Colors.justWhite};
  padding: 20px;
  border-radius: 16px;
`;
const Padding = styled.div`
  overflow-y: scroll;
  max-height: 600px;
`;

function ProfilePage() {
  const [currentTab, setCurrentTab] = useState("about");
  return (
    <>
      <LoggedInUserLayout
        body={
          <Wrapper>
            <Container>
              <Left>
                <Profile>
                  <ProfileIcon height={"180px"} />
                  <a>John Cena</a>
                  <Address>Kathmandu, Nepal</Address>
                </Profile>
                <SuccesssChip percent={"100%"} />
                <ActionsFlex>
                  <ul>
                    <li>
                      <div>
                        <LinkIcon />
                      </div>
                      Links
                    </li>
                    <li>
                      <div>
                        <LikeIcon />
                      </div>
                      121
                    </li>
                    <li>
                      <div>
                        <MessageIcon />
                      </div>
                      Chat
                    </li>
                  </ul>
                </ActionsFlex>
                <SkillsWidget>
                  <a>
                    Skills (<span>5</span>)
                  </a>
                  <SkillsContainer>
                    <SkillChip title={"Mobile Development"} />
                    <SkillChip title={"Mongo DB"} />
                    <SkillChip title={"Figma"} />
                    <SkillChip title={"React"} />
                    <ActionChip
                      title={"Add More"}
                      onClick={() => {
                        alert("Add More");
                      }}
                    />
                  </SkillsContainer>
                </SkillsWidget>
              </Left>
              <Right>
                <TabContainer>
                  <ul>
                    <Li
                      current={currentTab === "about"}
                      onClick={() => {
                        setCurrentTab("about");
                      }}
                    >
                      About
                    </Li>
                    <Li
                      current={currentTab === "experience"}
                      onClick={() => {
                        setCurrentTab("experience");
                      }}
                    >
                      Experience
                    </Li>
                    <Li
                      current={currentTab === "education"}
                      onClick={() => {
                        setCurrentTab("education");
                      }}
                    >
                      Education
                    </Li>
                    <Li
                      current={currentTab === "history"}
                      onClick={() => {
                        setCurrentTab("history");
                      }}
                    >
                      History
                    </Li>
                    <Li
                      current={currentTab === "reviews"}
                      onClick={() => {
                        setCurrentTab("reviews");
                      }}
                    >
                      Reviews
                    </Li>
                  </ul>
                </TabContainer>
                <ContentContainer>
                  <Padding>
                    {currentTab && currentTab === "about" ? (
                      <AboutSection />
                    ) : currentTab === "experience" ? (
                      <ExperienceSection />
                    ) : currentTab === "education" ? (
                      <EducationSection />
                    ) : currentTab === "history" ? (
                      <HistorySection />
                    ) : currentTab === "reviews" ? (
                      <ReviewSection />
                    ) : (
                      <AboutSection />
                    )}
                  </Padding>
                </ContentContainer>
              </Right>
            </Container>
          </Wrapper>
        }
      />
    </>
  );
}

export default ProfilePage;
