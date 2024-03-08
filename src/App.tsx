import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import TopBar from "@/components/layout/TopBar";
import HomePage from "@/pages/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="fovCalc-ui-theme">
      <div className="flex flex-col h-screen">
        <TopBar />
        <HomePage />
      </div>
    </ThemeProvider>
  );
};

export default App;
