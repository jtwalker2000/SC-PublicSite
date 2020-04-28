import "material-icons";
import "typeface-roboto";
import "presentation-css";
import "./styles/main.scss";

import initializeApp from "./setup/initializeApp.js";
import ErrorHandler from "./error/handler.js";

const Website = async () => {
  try {
    // returns the mediator
    return await initializeApp();
  } catch(e) {
    ErrorHandler(e);
  }
};

Website();
