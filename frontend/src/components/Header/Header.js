import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-primary p-0 d-flex justify-content-between "
        data-bs-theme="dark"
      >
        <a class="navbar-brand" href="/">
          <img
            className="logo"
            src={require("D:/Programming/MathMax/frontend/src/images/logo.png")}
          />
        </a>
        <div class="container-fluid me-5" style={{ width: "max-content" }}>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-between "
            id="navbarColor01"
          >
            <ul class="navbar-nav me-auto me-5">
              <li class="nav-item">
                <a class="nav-link" href="/tasks">
                  Tasks
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/assignment">
                  Assignment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5" href="/class">
                  Class
                </a>
              </li>
            </ul>
            <NavDropdown
              title="Potri"
              id="basic-nav-dropdown"
              class="d-flex ms-3 btn btn-primary text-primary "
              style={{
                backgroundColor: "white",
                padding: "10px",
                fontSize: "19px",
              }}
            >
              <NavDropdown.Item href="/profile" style={{ color: "white" }}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  navigate("/");
                }}
                style={{ color: "white" }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
