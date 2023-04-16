import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSrc from "assets/logo-black.png";

const AppBar = () => {
  return (
    <Conatiner>
      <Link to="/">
        <Logo src={LogoSrc} />
      </Link>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  background-color: white;
  top: 0px;
  height: 120px;
`;

const Logo = styled.img`
  width: 300px;
  padding: 30px;
`;

export default AppBar;
