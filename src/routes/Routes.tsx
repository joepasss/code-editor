import React from "react";
import { Switch, Route } from "react-router-dom";
import paths from "routes/paths";

const Home = React.lazy(() => import("pages/home/Home"));

const Routes = () => {
	return (
		<Switch>
			<Route exact path={paths.home} component={Home} />
		</Switch>
	);
};

export default Routes;
