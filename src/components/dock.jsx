import { Elements } from "@augmentedjs/elements";

class Dock extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    console.debug("render");
    const width = (((this.props.children) ? this.props.children.length : 0) * 2) + 0.0625 + "rem";
    const style = { left: `calc(50% - ${width})` };
    return (
      <div style={ style } className={"dock " + ((this.props.className) ? this.props.className : "")} id={(this.props.id) ? this.props.id : ""} name={(this.props.name) ? this.props.name : ""}>
        { this.props.children }
      </div>
    );
  };

  setHighlight = (item) => {
    if (item && typeof item === "number") {
      return this.setState({"highlight": item});
    }
    return null;
  };
};

export default Dock;
