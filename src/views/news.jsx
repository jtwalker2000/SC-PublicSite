import { Elements } from "@augmentedjs/elements";
import { Heading } from "@augmentedjs/elements-components";

class News extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <div id="news" name="news" className="section">
        <Heading level="1">Latest news</Heading>
        <p>…</p>
      </div>
    );
  };
};

export default News;
