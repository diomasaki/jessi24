import { Instagram, Mail, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 25vh;

  ${mobile({ height: "40vh" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  letter-spacing: 4px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
  margin-right: 25px;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #${(props) => props.color};
`;

const Email = styled.p``;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>JESSI.</Logo>
          <Desc>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </Desc>
          <SocialContainer>
            <SocialIcon color="515BD4">
              <Mail />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="DD2A7B">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="25d366">
              <WhatsApp />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center></Center>
        <Right>
          <Email></Email>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
