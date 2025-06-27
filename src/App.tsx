import React, { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Dashboard from "./pages/Dashboard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <HeaderComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
        <Dashboard searchTerm={searchTerm} />
      </HeaderComponent>
    </div>
  );
}

export default App;
