import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewDreamPage from "./pages/NewDreamPage";
import DreamDetailPage from "./pages/DreamDetailPage";
import EditDreamPage from "./pages/EditDreamPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          {/* Routes will be defined here in a later step */}
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewDreamPage />} />
          <Route path="/dreams/:id" element={<DreamDetailPage />} />
          <Route path="/dreams/:id/edit" element={<EditDreamPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
