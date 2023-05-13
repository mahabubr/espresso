import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/route";

function App() {
	return (
		<div className="container mx-auto w-11/12">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
