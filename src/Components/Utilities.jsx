import React from "react";
import styles from "../Styles/Header.module.css";
import { ReactComponent as IconCart } from "../SVG/iconCart.svg";
import { ReactComponent as ArrowUp } from "../SVG/arrowUp.svg";
import { ReactComponent as ArrowDown } from "../SVG/arrowDown.svg";

class Utilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedCart: false,
      openCurrencies: false,
      currency: props.currencies[0].symbol,
    };
  }

  toggleCart() {
    if (this.state.openedCart) {
      this.setState({ openedCart: false });
    } else {
      this.setState({ openedCart: true });
      if (this.state.openCurrencies) {
        this.setState({ openCurrencies: false });
      }
    }
  }

  toggleCurrencies() {
    if (this.state.openCurrencies) {
      this.setState({ openCurrencies: false });
    } else {
      this.setState({ openCurrencies: true });
      if (this.state.openedCart) {
        this.setState({ openedCart: false });
      }
    }
  }

  setCurrencySymbol(currencySymbol) {
    this.setState({ currency: currencySymbol });
    this.toggleCurrencies();
  }

  render() {
    const { currencies } = this.props;
    const { openedCart, openCurrencies, currency } = this.state;
    return (
      <div className={styles.utilities}>
        <button className={styles.currencyButton} onClick={() => this.toggleCurrencies()}>
          {currency} {openCurrencies ? <ArrowUp /> : <ArrowDown />}
          {openCurrencies && (
            <div className={`${styles.toggle} ${styles.currencyOptions}`}>
              {currencies.map((currency) => {
                return (
                  <button onClick={() => this.setCurrencySymbol(currency.symbol)}>
                    {currency.symbol} {currency.label}
                  </button>
                );
              })}
            </div>
          )}
        </button>
        <button className={styles.cartButton} onClick={() => this.toggleCart()}>
          {<IconCart />}
        </button>
        {openedCart && <div className={styles.toggle}>sdad</div>}
      </div>
    );
  }
}

export default Utilities;
