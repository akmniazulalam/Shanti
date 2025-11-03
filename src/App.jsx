import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Dashboard from "./components/pages/Dashboard";
import Error from "./components/pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<RootLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"*"} element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
