import React from "react";
import { Switch, Route } from "react-router-dom";
import paths from "./paths";

const Home = React.lazy(() => import("src/pages/home/Home"));

const Routes = () => {
	return (
		<Switch>
			<Route exact path={paths.home} component={Home} />
		</Switch>
	);
};

export default Routes;
