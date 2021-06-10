import React from "react";
import Slider from './slider'
import {styled} from 'frontity'
import PreviewImage from "../assets/images/Layer_18.png";
import { Element } from 'react-scroll'
{
  /* <PreviewContainer>
<div className="container">
  <Slider slides={slides}></Slider>
</div>
</PreviewContainer> */
}

const Container = styled.div`
  position: relative;
  margin-top: 4rem;
  margin-bottom: 4.2rem;
`;

const SlideContent = styled.div`
  padding-left: 4.68em;
`;

const SlideContainer = styled.div`
  display: flex;
  padding-left: 65px;
`;

const SlideTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 600;
  font-style: normal;
  line-height: 1em;
`;

const SlideText = styled.div`
    font-weight: 300;
`

const images = [PreviewImage, PreviewImage];

const slideContent = [
  <SlideContent key={1}>
    <SlideTitle>Система подбора, тестирования и оценки персонала!</SlideTitle>
    <SlideText>
      <div>– Находите лучших сотрудников за короткое время</div>
      <div>– Оценивайте on-line удаленных сотрудников</div>
      <div>– Оценивайте реальный уровень компетенции сотрудников</div>
      <div>– Вводите модель компетенций сотрудников вашей организации</div>
      <div>– Повышайте уровень мотивации и вовлеченности сотрудников</div>
      <div>– Определяйте и удерживайте самых талантливых сотрудников</div>
    </SlideText>
  </SlideContent>,
  <SlideContent key={2}>
    <SlideTitle>Система подбора, тестирования и оценки персонала!</SlideTitle>
    <SlideText>
      <div>– Находите лучших сотрудников за короткое время</div>
      <div>– Оценивайте on-line удаленных сотрудников</div>
      <div>– Оценивайте реальный уровень компетенции сотрудников</div>
      <div>– Вводите модель компетенций сотрудников вашей организации</div>
      <div>– Повышайте уровень мотивации и вовлеченности сотрудников</div>
      <div>– Определяйте и удерживайте самых талантливых сотрудников</div>
    </SlideText>
  </SlideContent>,
];

const slides = images.map((image, idx) => (
  <SlideContainer key={idx}>
    <img style={{width: 'fit-content', height: "fit-content"}} src={image} alt="промо картинка"></img>
    {slideContent[idx]}
  </SlideContainer>
));

const PreviewContainer = () => (
  <Element
    name="about-us" className="about-us" key={"display" + "about-us"}
  >
    <Container className="container">
      <Slider slides={slides}></Slider>
    </Container>
  </Element>
);

export default PreviewContainer