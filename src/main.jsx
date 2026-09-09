document.body.innerHTML="<h1 style="color:red;padding:30px">JAX TEST</h1>";
window.onerror=(m,s,l,c,e)=>{document.body.innerHTML="<pre style="color:red;white-space:pre-wrap;padding:20px">"+m+"\n"+(e?.stack||"")+"</pre>";};
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

console.log("🔥 JAX FRONTEND LOADED");
