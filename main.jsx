import React from "react";
import ReactDOM from "react-dom/client"
import App from "./app";

let Layout = () => {
    return (
        <>
          <App />  
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);