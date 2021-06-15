import React, { useState, useEffect, useMemo } from "react";
import Slider from "./slider";
import { connect, styled } from "frontity";
import PreviewImage from "../assets/images/Layer_18.png";
import { Element } from "react-scroll";
import Features from "./features";
import ForWhom from "./forWhom";
import parse from 'html-react-parser';

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

  & img {
    width: fit-content;
  }
`;

const SlideTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 600;
  font-style: normal;
  line-height: 1em;
  margin: 0;
  margin-bottom: 40px;
`;

const SlideText = styled.div`
  font-weight: 300;
  line-height: 22px;
`;

const images = [PreviewImage, PreviewImage];

// const slideContent = [
//   <SlideContent key={1}>
//     <SlideTitle>Система подбора, тестирования и оценки персонала!</SlideTitle>
//     <SlideText>
//       <div>– Находите лучших сотрудников за короткое время</div>
//       <div>– Оценивайте on-line удаленных сотрудников</div>
//       <div>– Оценивайте реальный уровень компетенции сотрудников</div>
//       <div>– Вводите модель компетенций сотрудников вашей организации</div>
//       <div>– Повышайте уровень мотивации и вовлеченности сотрудников</div>
//       <div>– Определяйте и удерживайте самых талантливых сотрудников</div>
//     </SlideText>
//   </SlideContent>,
//   <SlideContent key={2}>
//     <SlideTitle>Система подбора, тестирования и оценки персонала!</SlideTitle>
//     <SlideText>
//       <div>– Находите лучших сотрудников за короткое время</div>
//       <div>– Оценивайте on-line удаленных сотрудников</div>
//       <div>– Оценивайте реальный уровень компетенции сотрудников</div>
//       <div>– Вводите модель компетенций сотрудников вашей организации</div>
//       <div>– Повышайте уровень мотивации и вовлеченности сотрудников</div>
//       <div>– Определяйте и удерживайте самых талантливых сотрудников</div>
//     </SlideText>
//   </SlideContent>,
// ];

// const slides = images.map((image, idx) => (
//   <SlideContainer key={idx}>
//     <img
//       style={{ width: "fit-content", height: "fit-content" }}
//       src={image}
//       alt="промо картинка"
//     ></img>
//     {slideContent[idx]}
//   </SlideContainer>
// ));

const PreviewContainer = ({ state, actions, libraries }) => {
  const [banners, setBanners] = useState([]);
  const getBanners = async () => {
    const res = await fetch(
      "http://91.201.41.228/index.php/wp-json/wp/v2/banners"
    );
    const obj = await res.json();
    setBanners(obj);
  };

  const slides = useMemo(() => {
    return banners.map((item, idx) => {
      return (
        <SlideContainer key={idx}>
          <img src={item.banner_image.guid} />
          <SlideContent key={1}>
            <SlideTitle>{item.banner_title}</SlideTitle>
            <SlideText>{parse(item.banner_content)}</SlideText>
          </SlideContent>
        </SlideContainer>
      );
    });
  }, [banners]);

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <Element
      name="about-programm"
      className="about-programm"
      key={"display" + "about-programm"}
    >
      <Container className="container">
        <Slider slides={slides}></Slider>
      </Container>
      <Features />
      <ForWhom />
    </Element>
  );
};

export default connect(PreviewContainer);
