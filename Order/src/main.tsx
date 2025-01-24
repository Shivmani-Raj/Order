import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Component/Page/Order/Order";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Order/>
  </StrictMode>
);
