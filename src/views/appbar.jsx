import { Elements } from "@augmentedjs/elements";
import { DISPLAY_ABOUT } from "@augmentedjs/elements-dialogs";
import { Heading, Avatar } from "@augmentedjs/elements-components";
import { Appbar as BaseAppbar } from "@augmentedjs/elements-appbar";
/* custom */
import HamburgerMenu from "./nav.jsx";

import { HAMBURGER_ITEMS } from "../constants.js";

class Appbar extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    console.debug("render");
    return (
      <BaseAppbar name={this.props.name} mediator={this.props.mediator}
          channel={this.props.channel} identifier={this.props.identifier} notification>
        <Avatar onClick={this.logo} className="logo" id="avatar"/>
        <Heading level="1" className="appname">{APP_TITLE}</Heading>
        <HamburgerMenu id="menu" name="ham" title={APP_NAME} items={HAMBURGER_ITEMS}/>
      </BaseAppbar>
    );
  };

  logo = () => {
    console.debug("logo", DISPLAY_ABOUT);
    this.sendMessage(DISPLAY_ABOUT);
  };
};

export default Appbar;
