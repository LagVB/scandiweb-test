import { client, Field, Query } from "@tilework/opus";
import React from "react";
import { Outlet } from "react-router-dom";
import getComponentWithParams from "../getComponentWithParams";
import Home from "../Components/Home";

function setQuery(argument) {
  const fieldList = ["id", "name", "inStock", "gallery", "brand"];
  const arrayCategoryProducts = new Query("category", false)
    .addArgument("input", "CategoryInput", { title: argument })
    .addField(
      new Field("products", true)
        .addFieldList(fieldList)
        .addField(new Field("prices", true).addField("amount").addField(new Field("currency", true).addFieldList(["label", "symbol"])))
    );
  return arrayCategoryProducts;
}

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryProducts: null,
      activeCategory: null,
    };
    this.getCategoryProducts = this.getCategoryProducts.bind(this);
  }

  async getCategoryProducts() {
    const { firstCategory, category } = this.props;
    const argument = category || firstCategory;
    const result = await client.post(setQuery(argument));
    this.setState({ categoryProducts: result.category.products, activeCategory: argument });
  }

  shouldComponentUpdate(nextProps) {
    return this.state.activeCategory !== nextProps.category || nextProps.isHome === nextProps.category;
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.getCategoryProducts();
    }
  }

  componentDidMount() {
    this.getCategoryProducts();
  }

  render() {
    const { firstCategory, category } = this.props;
    return (
      <>
        <Home category={category || firstCategory} products={this.state} isHome={category === undefined} />
        <Outlet />
      </>
    );
  }
}

export default getComponentWithParams(HomeContainer);
