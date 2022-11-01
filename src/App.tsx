import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "src/auth/AuthProvider";
import CustomThemeProvider from "src/theme/CustomThemeProvider";
import Routes from "src/routes/Routes";
import Loading from "src/components/common/loading/Loading";

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Router>
				<AuthProvider>
					<CustomThemeProvider>
						<Routes />
					</CustomThemeProvider>
				</AuthProvider>
			</Router>
		</Suspense>
	);
}

export default App;
