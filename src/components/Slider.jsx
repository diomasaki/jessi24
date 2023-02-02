import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { jessi } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;
  background-color: beige;
  overflow: hidden;
  display: flex;

  ${mobile({ width: "100%", height: "30vh" })}
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  opacity: 0.5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
  cursor: pointer;

  ${mobile({ width: "30px", height: "30px" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0px;
  letter-spacing: 3px;
  font-weight: 600;
  padding: 5px;
`;

const Button = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 10px 8px;
  margin-left: 6px;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 80px;
  margin-top: 50px;
`;

const Image = styled.img`
  height: 80vh;
  border-radius: 10px;

  ${mobile({ height: "210px", marginLeft: "91px" })}
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 3);
    } else setSliderIndex(sliderIndex < 3 ? sliderIndex + 1 : 0);
  };

  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeft onClick={() => handleClick("left")} />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {jessi.map((item) => (
          <Slide>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>CLICK ME</Button>
            </InfoContainer>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right">
        <ArrowRight onClick={() => handleClick("right")} />
      </Arrow>
    </Container>
  );
};

export default Slider;
