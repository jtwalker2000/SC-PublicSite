import { Elements } from "@augmentedjs/elements";
import { Heading } from "@augmentedjs/elements-components";
import LogoImage from "../images/icon-light.png";

class Logo extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <div id={this.props.id} name={this.props.name} className={this.props.className}>
        <img src={LogoImage} alt="SC" /><Heading level="1">Semantic<span className="highlight">Clarity</span></Heading>
      </div>
    );
  };
};

export default Logo;
