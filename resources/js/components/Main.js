import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { Box } from "@mui/system";
import Navigation from "./Navigation";
import { Grid } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "../pages/Example";
import Home from "../pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function Main() {
    return (
        <Box>
            <Navigation></Navigation>
            <Router>
                <QueryClientProvider client={client}>
                    <main className={"m-5"}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </main>
                </QueryClientProvider>
            </Router>
        </Box>
    );
}

export default Main;
// for <div id="main-employee"></div>
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Main />);
