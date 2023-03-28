import styled, { css } from "styled-components";

interface TabClickProps {
  activatedTab: string;
  onClick: (tab: string) => void;
}

interface ITabActive {
  active: boolean;
}

const TabBar = ({ activatedTab, onClick }: TabClickProps) => {
  const tabs = ["디데이", "더보기"];
  return (
    <Container>
      {tabs.map((tab, i) => {
        return (
          <Tab
            key={`${tab}-${i}`}
            active={tab === activatedTab}
            onClick={() => onClick(tab)}
          >
            {tab}
          </Tab>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 120px;
  border-bottom: 1px solid #d9d8d4;
  background-color: white;
  width: 100%;
`;

const Tab = styled.p<ITabActive>`
  font-size: 18px;
  line-height: 26px;
  padding: 12px;
  cursor: pointer;

  &:first-child {
    margin-left: 15%;
  }

  + p {
    margin-left: 10px;
  }

  ${(props) =>
    props.active &&
    css`
      color: #f7c539;
      font-weight: bold;
      box-shadow: inset 0 -4px 0 #f7c539;
    `}
`;
export default TabBar;
