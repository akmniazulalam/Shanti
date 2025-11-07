import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Dashboard from "./components/pages/Dashboard";
import Error from "./components/pages/Error";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Chats from "./components/pages/Chats";
import Notifications from "./components/pages/Notifications";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<RootLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"*"} element={<Error />} />
        </Route>
        <Route path={"/dashboard"} element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path={"chats"} element={<Chats />} />
          <Route path={"notifications"} element={<Notifications />} />
          <Route path={"settings"} element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
