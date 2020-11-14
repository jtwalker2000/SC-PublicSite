import { Elements } from "@augmentedjs/elements";
import { Card, Heading, ButtonBar, Button } from "@augmentedjs/elements-components";

class ProductsCard extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <Card name="productsCard" id="productsCard" className="productsCard">
        <Heading level="1">Products</Heading>
        <p>Delivering targeted, relevant product recommendations increases
          customer satisfaction and sales. Leverage our proven offering and
          enhance your customers' online experience by providing relevant
          product recommendations.</p>
        <p>Try our SaaS-based Product Recommender and deliver actionable results
          for your online business.</p>
        <ButtonBar>
          <Button name="products" id="products" icon="work_outline" title="More about products" kind="secondary">&nbsp;More About Products</Button>
        </ButtonBar>
      </Card>
    );
  };
};

export default ProductsCard;
