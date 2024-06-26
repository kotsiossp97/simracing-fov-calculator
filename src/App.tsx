import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import HomePage from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import TriplesPage from "@/pages/Triples";
import Page404 from "@/pages/404Page";
import TestPage from "@/pages/Test";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="fovCalc-ui-theme">
      <BrowserRouter basename="/simracing-fov-calculator">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route id="home" index element={<HomePage />} />
            <Route id="triples" path="/triples" element={<TriplesPage />} />
            <Route id="test" path="/test" element={<TestPage />} />

            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
        {/* <div className="flex flex-col h-screen">
          <TopBar />
          <HomePage />
        </div> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
