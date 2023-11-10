import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/main-layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="result" element={<Result />} />
      </Route>
    </Routes>
  );
}

export default App;
