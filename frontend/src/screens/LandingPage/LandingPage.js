import React from "react";
import "./LandingPage.css";
import { Button, Container, Row } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div class="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome To MathMax</h1>
            <p className="subtitle">Defeating Mathematics</p>
          </div>
          <div className="buttonContainer">
            <a href="/login">
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </a>
            <a href="/register">
              <Button
                size="lg"
                className="landingbutton"
                variant="outline-primary"
              >
                Signup
              </Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
