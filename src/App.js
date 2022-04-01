import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Footer} from './components/Footer/Footer'

import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Sign Up/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms/" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="Sign-Up" element={<SignUp />} />
        <Route element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
