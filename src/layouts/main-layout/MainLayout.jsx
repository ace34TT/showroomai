import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
const MainLayout = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
