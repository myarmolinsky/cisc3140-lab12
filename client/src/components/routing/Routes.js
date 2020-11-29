import React from "react";
import { Route, Switch } from "react-router-dom";
import Submitted from "../layout/Submitted";

const Routes = () => {
  return (
    <section className="container">
      {/*every page within the theme except for the landing page has a class of 'container' to push everything to the middle
        for the landing page, we want the image to go all the way over so it doesn't have the class of 'container'*/}
      <Switch>
        {/*wrap everything in a switch so we don't have issues, especially when we create our 'private route' component*/}
        <Route exact path="/submitted" component={Submitted} />
      </Switch>
    </section>
  );
};

export default Routes;
