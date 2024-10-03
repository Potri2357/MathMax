import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import Axios from "axios";
import Tick from "../../components/Tick";

const RegisterScreen = () => {
  const [emailReg, setemailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [usernameReg, setusernameReg] = useState("");
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const [tick, settick] = useState(false);

  const submithandler = async (e) => {
    e.preventDefault();

    try {
      setloading(true);
      settick(false);
      seterror(false);

      const { data } = await Axios.post("http://localhost:3001/api/users/", {
        username: usernameReg,
        email: emailReg,
        password: passwordReg,
      });

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));

      setloading(false);
      settick(true);
    } catch (error) {
      seterror("Registration is not successful");
      setloading(false);
    }
  };

  return (
    <div id="loginscreen">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {tick && <Tick />}
      <form onSubmit={submithandler}>
        <div class="form-group">
          <label htmlFor="usr" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Username"
            value={usernameReg}
            onChange={(e) => setusernameReg(e.target.value)}
          />
        </div>
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
            value={emailReg}
            onChange={(e) => setemailReg(e.target.value)}
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
            value={passwordReg}
            onChange={(e) => setpasswordReg(e.target.value)}
          />
        </div>
        <button type="submit" id="submit" class="btn btn-primary m-2 ms-3 me-2">
          Register
        </button>
      </form>
      <div class="text-center mt-2">
        Already have an account ?
        <a href="/login" style={{ color: "var(--bs-purple)" }} className="ms-2">
          Login
        </a>
      </div>
    </div>
  );
};

export default RegisterScreen;
