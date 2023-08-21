import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/es/integration/react";
import { MagnifyingGlass } from "react-loader-spinner";
import store from "./redux/store/allStore.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate
        loading={
          <div>
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </div>
        }
        onBeforeLift={() => new Promise((resolve) => setTimeout(resolve, 1000))}
      ></PersistGate> */}
      <App />
    </Provider>
  </React.StrictMode>
);
