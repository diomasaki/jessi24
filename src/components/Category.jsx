import React from "react";
import styled from "styled-components";
import { jessisec } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 100px;
  height: 72vh;
  background-color: #cdcfcf;

  ${mobile({ width: "388px", padding:"2px" })}
`;

const Category = () => {
  return (
    <Container>
      {jessisec.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Category;
