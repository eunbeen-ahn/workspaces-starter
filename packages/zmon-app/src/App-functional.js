import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header"
import { getGNB } from 'zmon-gnb' // zmon 프로젝트에 포함시킬때


export default function App() {
  const gnbEl = useRef(null);
  useEffect(props => {
    getGNB(gnbEl.current)
  }, []);

  return (
    <div className="App">
      <div id="gnb" ref={gnbEl}/>
      <Header/>
      <h2>Functional Component</h2>
    </div>
  );
}
