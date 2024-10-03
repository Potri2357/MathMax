import React, { useEffect, useState } from "react";
import "./LoginScreen.css";
import Axios from "axios";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [emailLog, setemailLog] = useState("");
  const [passwordLog, setpasswordLog] = useState("");
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      navigate("/mission");
    }
  });

  const submithandler = async (e) => {
    e.preventDefault();

    try {
      setloading(true);
      seterror(false);

      const { data } = await Axios.post(
        "http://localhost:3001/api/users/login",
        {
          email: emailLog,
          password: passwordLog,
        }
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      setloading(false);
    } catch (error) {
      seterror("Invalid email/password");
      setloading(false);
    }
  };

  return (
    <div id="loginscreen">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <form onSubmit={submithandler}>
        <div class="mb-3 mt-4">
          <label htmlFor="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="E-mail address"
            aria-describedby="emailHelp"
            value={emailLog}
            onChange={(e) => setemailLog(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            class="form-control"
            id="exampleInputPassword1"
            value={passwordLog}
            onChange={(e) => setpasswordLog(e.target.value)}
          />
        </div>
        <button type="submit" id="submit" class="btn btn-primary m-2 ms-3 me-2">
          Submit
        </button>
      </form>
      <div class="text-center mt-2">
        <a href="#" style={{ color: "var(--bs-purple)" }}>
          Forgotten Password ?
        </a>
      </div>
      <div class="_8icz"></div>
      <div>
        <button
          class="btn  mx-5"
          id="createAccount"
          onClick={() => {
            navigate("/register");
          }}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
