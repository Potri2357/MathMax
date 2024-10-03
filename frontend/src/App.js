import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/ResgisterScreen/RegisterScreen";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "../src/bootstrap.min.css";
import "./App.css";
import Operation from "./components/Mission/Operation/Operation";
import Mission from "./components/Mission/Mission";
import ScoreScreen from "./screens/ScoreScreen/ScoreScreen";
import LandingPage from "./screens/LandingPage/LandingPage";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<LoginScreen />} exact />
        <Route path="/register" element={<RegisterScreen />} exact />
        <Route path="/score" element={<ScoreScreen />} exact />
        <Route path="/mission" element={<Mission />} exact />
        <Route path="/mission/addition" element={<Operation op="+" />} exact />
        <Route
          path="/mission/subtraction"
          element={<Operation op="-" />}
          exact
        />
        <Route
          path="/mission/multiplication"
          element={<Operation op="x" />}
          exact
        />
        <Route path="/mission/division" element={<Operation op="/" />} exact />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
