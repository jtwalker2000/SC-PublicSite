import { HamburgerMenu as BaseHamburgerMenu } from "@augmentedjs/elements-navigation";

class HamburgerMenu extends BaseHamburgerMenu {
  constructor(props = {}) {
    super(props);
  };
  home() {
    console.debug("menu click - home");
    window.location = "#home";
  };

  solutions() {
    window.location = "#solutions";
  };
};

export default HamburgerMenu;
