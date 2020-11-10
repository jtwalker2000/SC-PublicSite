import { Elements, Router, Route } from "@augmentedjs/elements";
import Home from "./views/home.jsx";

import Mediator from "./mediator.js";

const MAIN_MOUNT = "#main";

const home = () => <Home name="home" mediator={Mediator} channel="main" identifier="main"/>;


const router = () => {
  return (
    <Router transitionOut={250} transitionIn={250}>
      <Route path="" component={home} mount={MAIN_MOUNT} />
      <Route path="home" component={home} mount={MAIN_MOUNT} />
    </Router>
  );
};

export default router;
