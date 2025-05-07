import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// MSW 초기화
// if (process.env.NODE_ENV === "development") {
//   import("./mocks/browser").then(({ worker }) => {
//     worker
//       .start()
//       .then(() => {
//         console.log("MSW started successfully");
//       })
//       .catch((error) => {
//         console.error("MSW failed to start:", error);
//       });
//   });
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
