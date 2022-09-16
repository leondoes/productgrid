import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
import ProductListPage from "/src/pages/ProductListPage";
import WishlistPage from "/src/pages/Wishlist";
import Flyer from "/src/pages/Flyer";
import Cart from "/src/pages/Cart";
import DataExtraction from "/src/pages/DataExtraction";
import Profile from "/src/pages/Profile";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ProductListPage" element={<ProductListPage />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
        <Route path="DataExtraction" element={<DataExtraction />} />
        <Route path="/Flyer" element={<Flyer />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
