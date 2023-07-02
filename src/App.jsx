import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AbotPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default App;
