import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useToast } from "../../common/manager/contextManager/ToastContextManager";
import { manageGetProjectById } from "../../common/manager/projectManager/ProjectManager";
import ClockIcon from "../../components/icon/ClockIcon";
import SpinnerWidget from "../../components/loading/SpinnerWidget";
import PriceChip from "../../components/widget/chip/PriceChip";
import SkillChip from "../../components/widget/chip/SkillChip";
import TypeChip from "../../components/widget/chip/TypeChip";
import DeadlineWidget from "../../components/widget/duration/DeadlineWidget";
import DurationWidget from "../../components/widget/duration/DurationWidget";
import ProfileWidget from "../../components/widget/profile/ProfileWidget";
import { Colors } from "../../constants/Colors";
import { FontSize } from "../../constants/FontSize";
import { calculateTimeDifference } from "../../utils/date/CalculateTimeDifference";
import { convertToTime } from "../../utils/date/ConvertToTime";
import TaskDetailsTabbedPanel from "./TaskDetailsTabbedPanel";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: inherit;
  background-color: #0000006c;
  z-index: 98;
`;
const Container = styled.div`
  height: calc(100%);
  display: flex;
  flex-direction: column;
`;
const Fixed = styled.div`
  height: fit-content;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Content = styled.div`
  height: calc(100%);
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  padding-bottom: 0px;
`;
const PostedDate = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FontSize.small};
  color: ${Colors.subtitleBlack};
  gap: 4px;
  svg {
    strokewidth: 1px !important;
    margin-bottom: -3px;
    height: 16px !important;
  }
`;
const Title = styled.div`
  font-size: ${FontSize.mediumLarge};
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  span {
    font-size: ${FontSize.small};
    color: ${Colors.greyOutline};
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap;
  button {
    font-size: ${FontSize.small};
    height: 38px;
    width: 40px;
  }
`;
const SkillsRow = styled.div`
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 2px;
  }
`;
const Box = styled.div`
  border: 1px solid ${Colors.greyOutlineShadow};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Gap = styled.div`
  height: 1px;
  margin: 10px auto;
`;

const OverlayContent = styled.div`
  height: 600px;
  width: 500px;
  padding: 20px;
  background-color: white;
`;

function CompletedTaskDetails({ projectId }) {
  const [project, setProject] = useState();
  const [reload, setReload] = useState();
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    async function getProject() {
      await manageGetProjectById(
        projectId,
        (project) => {
          if (project.status === "Completed") {
            setProject(project);
          } else {
            showToast("The project could not be found under Active.");
          }
        },
        (err) => {
          showToast(err);
          setProject(null);
        }
      );
      setLoading(false);
    }
    getProject();
  }, [projectId, reload]);
  return (
    <Wrapper>
      {loading && <SpinnerWidget />}
      <Container>
        {project && project != null ? (
          <Content>
            <Fixed>
              <Title>{project.projectName}</Title>
              <Flex>
                <Row>
                  <PostedDate>
                    <ClockIcon />
                    <div>{calculateTimeDifference(project.createdAt)}</div>
                  </PostedDate>
                  <TypeChip type={project.status} />
                </Row>
                <Row></Row>
              </Flex>
              <Box>
                <Flex>
                  <Row>
                    <ProfileWidget
                      name={project.companyName || project.postedBy.fullname}
                      url={project.postedBy.profileImage}
                      address={project.address}
                    />
                    <PriceChip
                      min={project.salary.min}
                      max={project.salary.max}
                    />
                  </Row>
                  {project.duration && project.duration != null ? (
                    <DurationWidget
                      from={project.duration.from}
                      to={project.duration.to}
                    />
                  ) : (
                    <DeadlineWidget
                      date={convertToTime(project.createdAt)}
                      type={"Posted Date"}
                    />
                  )}
                </Flex>
                <SkillsRow>
                  {project.skills.map((skill, key) => (
                    <SkillChip title={skill.name} key={key} />
                  ))}
                </SkillsRow>
                <Flex>
                  <span>*This project is only visible to project members</span>
                  <Row></Row>
                </Flex>
              </Box>
            </Fixed>
            <Gap />
            <TaskDetailsTabbedPanel
              setOverlay={null}
              project={project}
              reload={setReload}
              showReviews={true}
            />
          </Content>
        ) : (
          <>Error could not load</>
        )}
      </Container>
    </Wrapper>
  );
}

export default CompletedTaskDetails;
