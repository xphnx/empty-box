import React, { StrictMode} from "react";
import { createRoot } from "react-dom/client"; 
import { Button } from "./components/Button/Button";

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <StrictMode>
        <Button />
    </StrictMode>
)