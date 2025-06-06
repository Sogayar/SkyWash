import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Marcello } from "./screens/Marcello/Marcello";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Marcello />
  </StrictMode>,
);
