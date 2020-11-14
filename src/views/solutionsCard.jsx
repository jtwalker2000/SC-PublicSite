import { Elements } from "@augmentedjs/elements";
import { Card, Heading, ButtonBar, Button } from "@augmentedjs/elements-components";

class SolutionsCard extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <Card name="solutionsCard" id="solutionsCard" className="solutionsCard">
        <Heading level="1">Solutions</Heading>
        <p>SemanticClarity extends and enhances your Big Data and BI
          capabilities. We can help focus your efforts, tame your data tsunami and 
          get measurable results from your Big Data initiatives.</p>
        <p>Partner with us to incorporate best practices and best-of-breed
          technologies, at any scale, in a cloud or on-premise environment. We
          deliver tangible value with scalable, high performance, secure
          solutions.</p>
        <p>Contact us and put your Big Data initiatives on the fast track to
          success - today.</p>
        <ButtonBar>
          <Button name="solutions" id="solutions" icon="build" title="More about solutions" kind="secondary">&nbsp;More About Solutions</Button>
        </ButtonBar>
      </Card>
    );
  };
};

export default SolutionsCard;
