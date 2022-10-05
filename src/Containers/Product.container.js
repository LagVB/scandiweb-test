import { client, Field, Query } from "@tilework/opus";
import React from "react";
import Product from "../Components/Product";
import getComponentWithParams from "../getComponentWithParams";

function setQuery(productId) {
  const fieldList = ["id", "name", "inStock", "gallery", "description", "category", "brand"];

  const arrayProduct = new Query("product", true)
    .addArgument("id", "String!", productId)
    .addFieldList(fieldList)
      .addField(new Field("prices", true)
        .addField("amount")
        .addField(new Field("currency", true)
          .addFieldList(["label", "symbol"])))
    .addField(new Field("attributes", true)
      .addField("id", "name", "type")
      .addField(new Field("items", true)
        .addField("displayValue", "value", "id")));
  return arrayProduct;
}

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
    this.getProduct = this.getProduct.bind(this);
  }

  async getProduct() {
    const productId = this.props.productId;
    const result = await client.post(setQuery(productId));
    this.setState({ product: result.product });
  }

  componentDidMount() {
    this.getProduct();
  }
  render() {
    return <Product product={this.state.product} />;
  }
}

export default getComponentWithParams(ProductContainer);
