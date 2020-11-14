import { Elements } from "@augmentedjs/elements";
import { Heading } from "@augmentedjs/elements-components";
import Acquia from "../images/Acquia-Logo-2.jpg";
import AWS from "../images/AWS-Logo_0.jpg";
import HPE from "../images/HP-EnterpriseLogo.jpg";

class Partners extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <div id="partners" name="partners" className="section">
        <Heading level="1">Partners</Heading>
        <p>SemanticClarity accelerates the delivery of value by leveraging our
          partners’ state-of-the-art technologies. With our longstanding
          partnerships and deep experience, we consistently help our customers
          navigate the labyrinth of vendor offerings, avoiding the pitfalls of
          "runaway" project engagements.</p>
        <p>Choosing and developing partner relationships is integral to building
          successful solutions. Leverage our expertise and the strength of our
          partners.</p>
        <figure className="banners">
          <img src={Acquia} alt="Acquia" title="Acquia" />
          <img src={AWS} alt="Amazon Web Services" title="Amazon Web Services" />
          <img src={HPE} alt="Hewlett Packard Enterprise" title="Hewlett Packard Enterprise" />
        </figure>
      </div>
    );
  };
};

export default Partners;
