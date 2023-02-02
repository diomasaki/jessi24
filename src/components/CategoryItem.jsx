import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70vh;
  flex: 1;
  margin: 10px;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Title = styled.h1`
  color: white;
  font-size: 50px;
  margin: 40px 0px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  text-shadow: 8px 5px 0 pink, 1px 1px 0 pink, -1px -1px 0 pink, 1px -1px 0 pink,
    -1px 1px 0 pink;
  -webkit-text-stroke-width: 0.9px;
  -webkit-text-stroke-color: black;

  ${mobile({ fontSize: "22px" })}
`;

const Button = styled.button`
  background-color: white;
  font-size: 15px;
  padding: 10px 7px;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 2px;
  cursor: pointer;
  border: none;
  ${mobile({ padding: "5px 2px", fontSize: "10px" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>CLICK ME</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
