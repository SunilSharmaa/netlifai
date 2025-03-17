import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import appStore from "./src/redux/appStore";
import { Provider } from "react-redux";

let Layout = () => {
  return (
    <>
      <Provider store={appStore}>
        <App />
      </Provider>
    </>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
