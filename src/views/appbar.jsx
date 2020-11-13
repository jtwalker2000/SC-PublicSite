import { Elements } from "@augmentedjs/elements";
import { Navigation } from "@augmentedjs/elements-navigation";
import { Appbar as BaseAppbar } from "@augmentedjs/elements-appbar";
/* custom */
import HamburgerMenu from "./nav.jsx";
import Logo from "./logo.jsx";

import { HAMBURGER_ITEMS, MENU_ITEMS } from "../constants.js";

class Appbar extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    console.debug("render");
    return (
      <BaseAppbar id={this.props.id} name={this.props.name} mediator={this.props.mediator}
          channel={this.props.channel} identifier={this.props.identifier} notification>
        <HamburgerMenu id="hamburger" name="hamburger" title={APP_NAME} items={HAMBURGER_ITEMS}/>
        <Logo id="logo" name="logo" className="company"/>
        <Navigation id="menu" name="menu" items={MENU_ITEMS}/>
      </BaseAppbar>
    );
  };
};

export default Appbar;
