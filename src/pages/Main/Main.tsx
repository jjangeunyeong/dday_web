import TabBar from "pages/Main/components/TabBar";
import AppBar from "pages/components/AppBar";
import { useState } from "react";
import styled from "styled-components";
import PlusImgSrc from "assets/pluBtn2.png";
import { Link } from "react-router-dom";
import DdayList from "pages/Main/components/DdayList";
import { Schedule } from "types/types";

const Main = () => {
  const [activatedTab, setActivatedTab] = useState("디데이");
  const [scheduleList, setScheduleList] = useState([
    {
      title: "New Schedule",
      day: "2023.03.15(수)",
      dday: "D-152",
      timeRemaining: "3,647시간 20분 40초 남음",
    },
    {
      title: "새로운 일정",
      day: "2023.03.21(화)",
      dday: "D-2",
      timeRemaining: "47시간 20분 40초 남음",
    },
  ]);

  const handleTabClick = (tab: string) => {
    setActivatedTab(tab);
  };

  return (
    <MainContainer>
      <AppBar />
      <TabBar activatedTab={activatedTab} onClick={handleTabClick} />
      {activatedTab === "디데이" ? (
        <DdayList scheduleList={scheduleList} />
      ) : (
        "더보기탭"
      )}
      <Link to="/select">
        <PlusBtn>
          <PlusImg src={PlusImgSrc} alt="dday_plus_button" />
        </PlusBtn>
      </Link>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcfaf2;
  height: 200vh;
`;

const PlusBtn = styled.button`
  position: sticky;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 90%;
  left: 85%;
  background-color: none;
  cursor: pointer;
  border: 4px solid black;
`;

const PlusImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default Main;
