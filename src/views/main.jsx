import { Elements } from "@augmentedjs/elements";
import { CHANNEL_DIALOGS } from "@augmentedjs/elements-dialogs";
import { Article, Section, CHANNEL_HEADER } from "@augmentedjs/elements-components";

import Appbar from "./appbar.jsx";
import Dialogs from "./dialogs.jsx";
import Mediator from "../mediator.js";

// import {  } from "../messages.js";

class Main extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <Article name={this.props.name} id={this.props.id} className={this.props.className}>
        <Appbar name="appbar" id="appbar"
          mediator={Mediator} channel={CHANNEL_HEADER} identifier={CHANNEL_HEADER}/>
        <Section name="main" id="main" className="main panel"/>
        <Dialogs name={CHANNEL_DIALOGS} id="dialogs"
          mediator={Mediator} channel={CHANNEL_DIALOGS} identifier={CHANNEL_DIALOGS}/>
      </Article>
    );
  };
};

export default Main;
