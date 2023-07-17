import { useState } from "react";
import Container from "./Container";
import Menu from "./Menu";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="parentcont">
      <BrowserRouter>
        <Menu/>
        <Container/>
      </BrowserRouter>
    </div>
  );
}

export default App;
