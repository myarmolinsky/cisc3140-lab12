import React, { Fragment } from "react"; //bring in react and Fragment
import "./App.css";
import Form from "./components/form/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //import react router
import Routes from "./components/routing/Routes";

const App = () => {
  return (
    <Router>
      {/*for the router to work, we have to wrap everything inside it*/}
      <Fragment>
        <Switch>
          <Route exact path="/" component={Form} />
          {/*instead of '<Landing />', we use this. we set 'exact path' equal to the index which is just '/' and the component we want to load is 'Landing'*/}
          <Route component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
