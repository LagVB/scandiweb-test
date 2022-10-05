import { useOutletContext, useParams } from "react-router-dom";
import React from "react";

function getComponentWithParams(ComponentOutParams) {
  return (props) => <ComponentOutParams productId={useParams().id} firstCategory={useOutletContext().name} category={useParams().category} {...props} />;
}

export default getComponentWithParams;
