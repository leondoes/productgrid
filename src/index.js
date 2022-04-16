import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
import ProductListPage from "/src/pages/ProductListPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ProductListPage" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
