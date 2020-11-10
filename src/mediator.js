import { Elements } from "@augmentedjs/elements";
import { DISPLAY_ABOUT, DISPLAY_ABOUT_DIALOG, CLOSE_DIALOG, DISPLAY_DIALOG, DISPLAY_STANDARD_DIALOG, SEND_NOTIFICATION, DISPLAY_NOTIFICATION, CLOSE_NOTIFICATION } from "@augmentedjs/elements-dialogs";

class Mediator extends Elements.Mediator {
  constructor(props = {}) {
    props.name = "mediator";
    console.debug("creating mediator!");
    super(props);

    this.on(DISPLAY_ABOUT, () => {
      this.publish("dialogs", DISPLAY_ABOUT_DIALOG);
    });

    this.on(CLOSE_DIALOG, () => {
      this.publish("dialogs", CLOSE_DIALOG);
    });

    this.on(DISPLAY_DIALOG, () => {
      this.publish("dialogs", DISPLAY_STANDARD_DIALOG);
    });

    this.on(SEND_NOTIFICATION, (message) => {
      this.publish("header", DISPLAY_NOTIFICATION, message);
    });

    this.on(CLOSE_NOTIFICATION, (message) => {
      this.publish("header", CLOSE_NOTIFICATION, message);
    });
  };
};
const mediator = new Mediator();

export default mediator;
