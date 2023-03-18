import NotFound from "pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
