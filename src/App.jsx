import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main/Main";
import Article from "./pages/Article/Article"
import Test from "./components/Test/Test"

const App = () => {
  return (
      <BrowserRouter >
          <Routes>
             <Route path="/" element={<Main/>}/>
             <Route path="post/:id/" element={<Article/>}/>
             <Route path="test" element={<Test/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
