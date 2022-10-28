import { PropsWithChildren } from "react";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import config from "src/config";

const AuthProvider = (props: PropsWithChildren<{}>) => {
	const history = useNavigate();

	const onRedirectCallback = (appState: AppState | any) => {
		history(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={config.auth0Domain}
			clientId={config.auth0ClientId}
			redirectUri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
		>
			{props.children}
		</Auth0Provider>
	);
};

export default AuthProvider;
