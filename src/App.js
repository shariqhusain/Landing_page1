import React, { useState } from "react";
import "./App.css";
import Main from "./NewsLanding/Main";
import Subscribe from "./NewsLanding/Subscribe";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [email, setEmail] = useState("Example@gmail.com");
  return (
    <>
      {/* <Main /> */}
      {/* <Subscribe /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main email={email} setEmail={setEmail} />}></Route>
          <Route path="/subscribe" element={<Subscribe email={email} />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
