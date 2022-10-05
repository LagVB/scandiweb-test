import React from "react";
import Header from "../Components/Header";
import { client, CombinedField, Query } from "@tilework/opus";
import { Outlet } from "react-router-dom";

const arrayCategoriesQuery = new Query("categories", true).addField("name");
const arrayCurrenciesQuery = new Query("currencies", true).addFieldList(["label", "symbol"]);

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      currencies: {
        label: null,
        symbol: null,
      },
    };
    this.getQueries = this.getQueries.bind(this);
  }

  async getQueries() {
    const result = await client.post(new CombinedField().add(arrayCategoriesQuery).add(arrayCurrenciesQuery));
    this.setState({ categories: result.categories, currencies: result.currencies });
  }

  componentDidMount() {
    this.getQueries();
  }

  render() {
    if (this.state.categories === null) {
      return <h1>Loading...</h1>;
    }
    const { categories, currencies } = this.state;
    return (
      <>
        <Header categories={categories} currencies={currencies} />
        <Outlet context={categories[0]} />
      </>
    );
  }
}

export default HeaderContainer;
