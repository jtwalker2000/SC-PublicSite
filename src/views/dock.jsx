import { Elements } from "@augmentedjs/elements";
import { Dock as BaseDock } from "@augmentedjs/elements-navigation";
// import BaseDock from "../components/dock.jsx";

class Dock extends BaseDock {
  constructor(props = {}) {
    super(props);
    this.state = { "highlight": 0 };
  };

  render() {
    console.debug("state", this.state);
    return (
      <BaseDock id={(this.props.id) ? this.props.id : ""} name={(this.props.name) ? this.props.name : ""} position={this.props.bottom}>
        <an-button className={(this.state.highlight === 0) ? "highlight" : ""} name="home" onClick={this.home} title="Home" icon="home"></an-button>
        <an-button className={(this.state.highlight === 1) ? "highlight" : ""} name="form" onClick={this.form} title="Form" icon="list"></an-button>
      </BaseDock>
    );
  };
  home = () => {
    return new Promise((resolve, reject) => {
      this.setState({"highlight": 0});
      if (this.state.highlight === 0) {
        resolve(this.state.highlight);
      }
      reject(`Failed to set highlight! ${this.state.highlight}`);
    })
    .then((highlight) => {
      window.location = "#home";
      return highlight;
    })
    .catch((e) => {
      console.error(e);
    });
  };

  form = () => {
    return new Promise((resolve, reject) => {
      this.setState({"highlight": 1});
      if (this.state.highlight === 1) {
        resolve(this.state.highlight);
      }
      reject(`Failed to set highlight! ${this.state.highlight}`);
    })
    .then((highlight) => {
      window.location = "#form";
      return highlight;
    })
    .catch((e) => {
      console.error(e);
    });
  };
};

export default Dock;
