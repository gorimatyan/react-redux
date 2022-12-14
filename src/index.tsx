import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/srore"; // storeをインポートする必要がある
import { Provider } from "react-redux"; // 状態をApp.tsに提供するためのやつ
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        {/* AppをラップすることでApp.tsでstore(global state)を利用できるようになる */}
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
