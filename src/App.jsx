import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Question from "./components/Question/Question";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Question></Question>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
