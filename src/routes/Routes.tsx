import { Switch, Route } from "react-router-dom";
import paths from "routes/paths";

// @FIXME: REFACTOR
const Test = () => <div>HELLO</div>;

const Routes = () => {
  return (
    <Switch>
      <Route exact path={paths.home} component={Test} />
    </Switch>
  );
};

export default Routes;
