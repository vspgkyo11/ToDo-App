import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import {Box} from "@mui/system"
import Navigation from "./Navigation"
import { Grid } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "../pages/Example";
import Home from "../pages/Home";

function Main() {
    return (
        <Box>
            <Navigation></Navigation>
            <Router>
                <main className={"m-5"}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </Router>
        </Box>
    );
}

export default Main;
// for <div id="main-employee"></div>
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Main />);