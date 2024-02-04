import React from "react";
import  ReactDOM  from "react-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import App from './App';
// import { UseState } from "./components/UseState";
// import { UseStateArray } from "./components/UseStateArray";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        {/* <App />
        <UseState />
        <UseStateArray /> */}
        <Header />
        <Hero />
    </React.StrictMode>
);

