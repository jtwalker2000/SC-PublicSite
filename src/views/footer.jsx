import { Elements } from "@augmentedjs/elements";

class Footer extends Elements.Component {
  constructor(props = {}) {
    super(props);
  };

  render() {
    return (
      <footer id="footer" name="footer" className="footer">
        <div class="links">
          <nav>
            <a href="#">Solutions</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </nav>
        </div>
        <div class="copy">
          <p>© Copyright 2020 SemanticClarity. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
};

export default Footer;
