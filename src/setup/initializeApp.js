import Mediator from "../views/mediator.js";
import MainView from "../views/mainView.js";
import Application from "../application/application.js";
import { HEADER } from "../messages.js";
import Logger from "../logger/logger.js";
import { RenderError } from "../error/errors.js";

import setupTheme from "./setupTheme.js";

const initializeApp = async () => {
  try {
    if (process.env.NODE_ENV === "production") {
      if (SERVICE_WORKERS && "serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("/service-worker.js")
          .then(registration => {
            Logger.info("SW registered");
          }).catch(registrationError => {
            Logger.error("SW registration failed: ", registrationError);
          });
        });
      } else if (SERVICE_WORKERS) {
        Logger.warn("Service workers are not supported on this browser.");
      }
    } else {
      Logger.debug("Looks like we are in development mode!");
    }
    const theme = await setupTheme();
    if (theme.isDarkMode) {
      import("../styles/darkmode.scss")
      .catch(e => {
        Logger.error(e);
      });
    }

    if (!Mediator) {
      throw new RenderError("Error creating mediator!");
    }

    // passed in for platform specific control
    const main = new MainView();
    Mediator.observeColleagueAndTrigger(main, HEADER, "main");
    const view = await main.render();
    if (!view) {
      throw new RenderError("Error rendering main!");
    }

    const p = await Application.start();
    if (!p) {
      throw new RenderError("Error starting application!");
    }
    return Mediator;
  } catch(e) {
    throw e;
  }
};

export default initializeApp;
