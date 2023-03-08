import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

//primeReact:
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
