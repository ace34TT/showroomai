import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/main-layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Result from "./pages/Result";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// PrivacyAndPolicy

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="result" element={<Result />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="privacy-policy" element={<PrivacyAndPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
