import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import bonusReducer from "./slices/bonusSlice";
import rewardReducer from "./reducers/reward";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward: rewardReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
