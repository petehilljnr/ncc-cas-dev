import React from "react";
import { Navbar, Container } from "react-bootstrap";
import clientLogo from "../images/ncc-logo.png";
import stantecLogo from "../images/stantec.svg";

export default function Navigation() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ background: "#343e48", zIndex: 100 }}
    >
      <Container fluid>
        <Navbar.Brand>
          <div>
          <img
            src={clientLogo}
            height={45}
            style={{ paddingLeft: "30px" }}
            alt="NCC"
          />
          <span style={{ paddingLeft: "30px" }}>Crash Analysis Dashboard</span>

          
          </div>
        </Navbar.Brand>
        <span className="float-end"><img src={stantecLogo} height={35} alt="Stantec logo"/></span>
      </Container>
    </Navbar>
  );
}
