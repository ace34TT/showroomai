import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store.js";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

// axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.baseURL = "https://replicate-nwey.onrender.com/api";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
