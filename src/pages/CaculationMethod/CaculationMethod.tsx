import AppBar from "pages/components/AppBar";
import styled, { css } from "styled-components";

interface Irepeat {
  repeat: boolean;
}
const CaculationMethod = () => {
  const method = ["디데이", "날짜수", "개월수", "주수", "연월일"];
  const repeatMethod = ["매월반복", "매년반복", "음력반복", "매주반복"];
  return (
    <>
      <AppBar />
      <Container>
        <SubContainer>
          <Title>디데이/날짜수 계산</Title>
          <MenuContainer>
            {method.map((m) => {
              return <Menu repeat={false}>{m}</Menu>;
            })}
          </MenuContainer>
          <Title>반복 계산</Title>
          <MenuContainer>
            {repeatMethod.map((m) => {
              return <Menu repeat={true}>{m}</Menu>;
            })}
          </MenuContainer>
        </SubContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fcfaf2;
  width: 100%;
  height: 100vh;
`;

const Title = styled.h3`
  margin: 100px 0 20px;
  font-size: 18px;
  font-weight: bold;
  color: #ffb217;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const MenuContainer = styled.div`
  background-color: white;
  border: 1px solid #d9d8d4;
  border-radius: 10px;
`;

const Menu = styled.div<Irepeat>`
  float: left;
  width: 50%;
  height: 70px;
  text-align:center;
  line-height: 70px;

  cursor: pointer;

  border-bottom: 1px solid #d9d8d4;

  :nth-child(2n+1){
    border-right : 1px solid #d9d8d4;
  }

  :last-child{
    border-bottom:none;
  }

  ${(props) =>
    props.repeat === true &&
    css`
      :nth-child(3) {
        border-bottom: none;
      }
    `} 
  }
`;

export default CaculationMethod;
