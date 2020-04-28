import { DirectiveView } from "presentation-decorator";
import Header from "../components/header.js";
import HamburgerMenu from "../components/hamburger.js";
import { ProgressIndicator } from "presentation-indicators";
import { HEADER, SET_INDICATOR } from "../messages.js";
// import Logger from "../logger/logger.js";
import { RenderError } from "../error/errors.js";

class MainView extends DirectiveView {
  constructor() {
    super({
      "tagName": "article",
      "id": "app",
      "name": "mainview",
      "style": "article"
    });

    this.template = /*html*/`<section id="header" class="header"></section><section id="main" class="main"></section><section id="dialogs" class="dialogs"></section>`;

    this._header = new Header();
    if (!this._header) {
      throw new RenderError("Error creating header!");
    }

    this._menu = new HamburgerMenu();
    if (!this._menu) {
      throw new RenderError("Error creating menu!");
    }

    this._indicator = new ProgressIndicator({ "el": "#progress" });
    if (!this._indicator) {
      throw new RenderError("Error creating indicator!");
    }

    this.on(HEADER, (message, data) => {
      //Logger.debug("Message", message, data);
      if (message === SET_SUBTITLE) {
        this._subheader.title = data;
      } else if (message === SET_INDICATOR) {
        //Logger.debug(`Setting progress - ${data}`);
        if (data === "true" || data === true) {
          this._indicator.setInProgress();
        } else {
          this._indicator.setComplete();
        }
      }
    });
  };

  async render() {
    await super.render();
    let view = await this._header.render();
    if (!view) {
      throw new RenderError("Error rendering header!");
    }

    view = this._indicator.render();
    if (!view) {
      throw new RenderError("Error rendering indicator!");
    }

    view = await this._menu.render();
    if (!view) {
      throw new RenderError("Error rendering hamburger menu!");
    }

    return this;
  };

  async remove() {
    await this._indicator.remove();
    await this._menu.remove();
    await this._header.remove();
    return await super.remove();
  };
};

export default MainView;
