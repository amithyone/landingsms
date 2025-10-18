import React, { useState } from "react";
import { MacbookPro } from "./screens/MacbookPro";
import { Login } from "./screens/Auth/Login";
import { Register } from "./screens/Auth/Register";

export const App = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'register'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'register':
        return <Register onNavigate={setCurrentPage} />;
      default:
        return <MacbookPro onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      
      {renderPage()}
    </div>
  );
};