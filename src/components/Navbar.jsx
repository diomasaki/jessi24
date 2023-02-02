import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70px;
  background-color: black;

  ${mobile({ overflow: "hidden", display: "flex", width: "102%" })}
`;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;

  ${mobile({ padding: "20px 30px", alignItems: "center" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
  font-family: "Courier New", Courier, monospace;
`;

const MenuItem = styled.div`
  color: white;
  margin-left: 25px;
  cursor: pointer;
  font-family: "Courier New", Courier, monospace;

  ${mobile({ fontSize: "10px", marginLeft: "20px", letterSpacing: "2px" })}
`;

const Logo = styled.h1`
  color: white;
  letter-spacing: 10px;

  ${mobile({ fontSize: "20px" })}
`;

const SearchContainer = styled.div`
  border: 1px solid white;
  align-items: center;
  display: flex;
  padding: 6px 10px;

  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  background: transparent;
  ::placeholder {
    color: white;
  }
  color: white;
  margin-right: 6px;
`;

const Language = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ID</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "white" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>JESSI.</Logo>
        </Center>
        <Right>
          <MenuItem>MYSTORY</MenuItem>
          <MenuItem>ABOUTMYLIFE</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
