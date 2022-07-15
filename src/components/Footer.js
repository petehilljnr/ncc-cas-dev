import styled from 'styled-components';
import stantecLogo from "../images/stantec.svg";

const FooterDiv = styled.div `
  margin-top: 1rem;
  padding: 0.6rem;
  background-color: #343e48;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Footer = () => {
    return (
      <>
        <FooterDiv>
        <span className="float-right"><img src={stantecLogo} height={35} alt="Stantec logo"/></span>
        </FooterDiv>
      </>
    )
  }
  
  export default Footer