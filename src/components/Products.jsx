import React from "react";
import styled from "styled-components";
import { productData } from "../data";
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {productData.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
