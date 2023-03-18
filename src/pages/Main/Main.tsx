import TabBar from "pages/Main/components/TabBar";
import NavBar from "pages/components/NavBar";
import { useState } from "react";
import styled from "styled-components";
import PlusImgSrc from "assets/pluBtn2.png";
import { Link } from "react-router-dom";

const Main = () => {
  const [activatedTab, setActivatedTab] = useState("디데이");
  const handleTabClick = (tab: string) => {
    setActivatedTab(tab);
  };

  return (
    <MainContainer>
      <NavBar />
      <TabBar activatedTab={activatedTab} onClick={handleTabClick} />
      <PlusBtn>
        <Link to="/">
          <PlusImg src={PlusImgSrc} alt="ddaylist_plus" />
        </Link>
      </PlusBtn>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlusBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  bottom: 5%;
  right: 15%;
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
