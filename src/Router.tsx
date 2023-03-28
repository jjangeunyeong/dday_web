import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import Main from "pages/Main/Main";
import CaculationMethod from "pages/CaculationMethod/CaculationMethod";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<CaculationMethod />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
