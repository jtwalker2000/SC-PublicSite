import { Elements } from "@augmentedjs/elements";
import { Heading } from "@augmentedjs/elements-components";

class Hero extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <div id="hero" name="hero" className="hero">
        <Heading level="1">SemanticClarity</Heading>
        <Heading level="2">Success at (any) Scale</Heading>
      </div>
    );
  };
};

export default Hero;
