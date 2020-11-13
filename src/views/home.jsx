import { Elements } from "@augmentedjs/elements";
import { ButtonBar, Button } from "@augmentedjs/elements-components";
import Hero from "./hero.jsx";
import SolutionsCard from "./solutionsCard.jsx";
import ProductsCard from "./productsCard.jsx";

class Home extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <div id={this.props.id} name={this.props.name} className="home">
        <Hero />
        <ButtonBar className="section">
          <Button name="contact" id="contact" icon="chat" title="Contact Us" kind="secondary">&nbsp;Contact Us Today</Button>
        </ButtonBar>
        <SolutionsCard />
        <ProductsCard />
      </div>
    );
  };
};

export default Home;
