import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* El React.StricMode no se pasa a producción, es para tener control mientras esta en desarrollo */}
		<App />
	</React.StrictMode>,
);
