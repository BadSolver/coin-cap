import { MainTemplate } from "components";
import { MainPage, WalletPage, DetailPage } from "pages";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainTemplate />}>
        <Route index element={<MainPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Route>
    </Routes>
  );
};
