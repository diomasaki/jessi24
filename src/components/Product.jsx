import {
  FavoriteBorderOutlined,
  Search,
  ThumbUpAltSharp,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }

  ${mobile({ minWidth: "300px", height: "300px" })}

`;

const Circle = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 60%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <ThumbUpAltSharp />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
