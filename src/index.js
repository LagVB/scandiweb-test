import { client } from "@tilework/opus";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/index.css";

client.setEndpoint("http://localhost:4000/");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
