import React from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "../Styles/Home.module.css";
import { ReactComponent as AddCartButton } from "../SVG/addCartIcon.svg";

class Home extends React.Component {
  render() {
    const { categoryProducts } = this.props.products;
    const categoryTitle = this.props.category;
    if (this.props.isHome) {
      return <Navigate to={`/${categoryTitle}`} />;
    }
    if (categoryProducts) {
      return (
        <div className={styles.homePage}>
          <h1 className={styles.title}>{categoryTitle}</h1>
          <section className={styles.products}>
            <ul>
              {categoryProducts.map((product) => {
                if (product.inStock) {
                  return (
                    <li className={styles.product} key={product.id}>
                      <Link to={`product/${product.id}`}>
                        <img alt="" src={product.gallery[0]} />
                        <p className={styles.productName}>
                          {product.brand} {product.name}
                        </p>
                        <p className={styles.productPrice}>
                          {product.prices[0].currency.symbol}
                          {product.prices[0].amount}
                        </p>
                      </Link>
                      <div tabIndex={0} className={styles.addCart}>
                        <button>
                          <AddCartButton />
                        </button>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li className={styles.product} key={product.id}>
                      <div className={styles.outStock}>
                        <h4>OUT OF STOCK</h4>
                      </div>
                      <img alt="" src={product.gallery[0]} />
                      <p className={styles.productName}>
                        {product.brand} {product.name}
                      </p>
                      <p className={styles.productPrice}>
                        {product.prices[0].currency.symbol}
                        {product.prices[0].amount}
                      </p>
                    </li>
                  );
                }
              })}
            </ul>
          </section>
        </div>
      );
    }
  }
}

export default Home;
