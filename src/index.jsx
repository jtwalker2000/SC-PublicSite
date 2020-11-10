/* Styles */
import "material-icons";
import "presentation-css";
import "./styles/main.scss";

import("presentation-elements");
import { Elements } from "@augmentedjs/elements";
/* router */
import router from "./router.jsx";
/* Main */
import Main from "./views/main.jsx";

Elements.render(<Main id="article" name="main" className="article"/>, document.getElementById("app"));

// interesting performance tunning
// window.addEventListener("DOMContentLoaded", (event) => {
//   console.debug("DOM fully loaded and parsed, loading icons");
//   import("material-icons");
// });
window.addEventListener("load", (event) => {
  console.debug("DOM fully loaded and parsed, and painted, swaping fonts");
  /* fonts */
  import("typeface-libre-franklin");
  import("typeface-roboto");
  // init the router
  router();
});
