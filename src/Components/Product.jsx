import React from "react";

class Product extends React.Component {
  render() {
    const product = this.props.product;
    console.log(product);
    if (product) {
      return (
        <>
          {product.description}
          <p>{product.name}</p>
          <p>{product.inStock}</p>
          <img alt="" src={product.gallery[0]} />
          <p>{product.category}</p>
          <p>{product.attributes[0].id}</p>
          <p>{product.attributes[0].name}</p>
          <p>{product.attributes[0].type}</p>
          <p>{product.attributes[0].items.displayValue}</p>
          <p>{product.attributes[0].items.value}</p>
          <p>{product.attributes[0].items.id}</p>
          <p>{product.prices[0].currency.label}</p>
          <p>{product.prices[0].currency.symbol}</p>
          <p>{product.prices[0].amount}</p>
          <p>{product.brand}</p>
          <a>ADD TO CART</a>
        </>
      );
    }
  }
}

export default Product;
