import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import Header from "./../../components/Header";
const MainLayout = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
