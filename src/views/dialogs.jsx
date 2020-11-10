import { Elements } from "@augmentedjs/elements";
import { Dialog, About, DISPLAY_ABOUT_DIALOG, CHANNEL_DIALOGS, DISPLAY_STANDARD_DIALOG, CLOSE_DIALOG } from "@augmentedjs/elements-dialogs";

const BUTTONS = [ { "name": "ok", "callback": "cancel" }];

class Dialogs extends Elements.Component {
  constructor(props = {}) {
    super(props, { "about": false, "dialog": false });
    // console.debug("props", props, this.props);
    // console.debug("dialogs", this.mediator, this.channel, this.identifier);
    this.on(CHANNEL_DIALOGS, (message, data) => {
      console.debug("message", message);
      if (message === DISPLAY_ABOUT_DIALOG) {
        // console.debug("message", message);
        this.setState({"about": true, "dialog": false});
        // console.debug("state", this.state);
      } else if (message === DISPLAY_STANDARD_DIALOG) {
        // console.debug("message", message);
        this.setState({"about": false, "dialog": true});
        // console.debug("state", this.state);
      } else if (message == CLOSE_DIALOG) {
        this.setState({"about": false, "dialog": false});
        // console.debug("state", this.state);
      } else {
        console.warn("Unknown message", message, data);
      }
    });
  };

  render() {
    return (
      <section id={this.props.id} className="dialogs">
        { this.state.about ? <About id="about" name="About" title={APP_NAME} description={DESCRIPTION} version={VERSION} author={AUTHOR} website={WEBSITE} mediator={this.mediator} channel={this.channel} identifier={this.identifier} /> : "" }
        { this.state.dialog ? <Dialog id="dialog-test" name="test" mediator={this.mediator} channel={this.channel} identifier={this.identifier} buttons={BUTTONS}><h1>Hello!</h1></Dialog> : "" }
      </section>
    );
  };
};

export default Dialogs;
