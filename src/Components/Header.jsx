import React from "react";
import Categories from "./Categories";
import Utilities from "./Utilities";
import { ReactComponent as Logo } from "../SVG/logo.svg";

class Header extends React.Component {
  render() {
    const { categories, currencies } = this.props;
    return (
      <header>
        <nav>
          <Categories categories={categories} />
        </nav>
        <div>
          <Logo />
        </div>
        <Utilities currencies={currencies} />
      </header>
    );
  }
}
export default Header;
