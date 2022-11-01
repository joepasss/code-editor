import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "src/auth/AuthProvider";
import CustomThemeProvider from "src/theme/CustomThemeProvider";
import Routes from "./routes/Routes";

function App() {
	return (
		<Router>
			<AuthProvider>
				<CustomThemeProvider>
					<Routes />
				</CustomThemeProvider>
			</AuthProvider>
		</Router>
	);
}

export default App;
