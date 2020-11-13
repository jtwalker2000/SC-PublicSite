/* Styles */
import "material-icons";
import "presentation-css";
import "./styles/main.scss";

import { Elements } from "@augmentedjs/elements";
/* router */
import router from "./router.jsx";
/* Main */
import Main from "./views/main.jsx";

Elements.render(<Main id="article" name="main" className="article"/>, document.getElementById("app"));

window.addEventListener("load", (event) => {
  console.debug("DOM fully loaded and parsed, and painted, swaping fonts");
  /* fonts */
  import("typeface-muli");
  import("typeface-montserrat");
  // import("typeface-libre-franklin");
  // import("typeface-roboto");
  // init the router
  router();
});
