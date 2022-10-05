import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Header.module.css";

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul className={styles.categories}>
        {categories.map((category) => {
          return (
            <li key={category.name}>
              <NavLink className={styles.category} to={`/${category.name}`}>
                {category.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Categories;
