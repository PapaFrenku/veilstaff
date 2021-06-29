import React, { useRef, useMemo, useEffect, useState } from "react";
import { styled } from "frontity";
import { Element } from "react-scroll";
import Feature1 from "../assets/images/searching.svg";
import Feature2 from "../assets/images/thinking.svg";
import Feature3 from "../assets/images/feature3.png";
import Feature4 from "../assets/images/high-five.svg";
import ForWhom from "./forWhom";

const FeatureContainer = styled.div`
  display: flex;
  max-width: 285px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  height: inherit;
  position: relative;
  & img {
    width: auto;
    height: 100%;
  }
  & h3 {
    text-align: center;
    margin-top: 30px;
    font-size: 1.4em;
    margin-top: 30px;
    margin-bottom: 0;
    font-weight: 600;
    
    max-width: 235px;
    line-height: 1em;
  }
  & p {
    text-align: center;
    /* font-size: 14px; */
    color: #5c5c5c;
    font-weight: 300;
    line-height: 20px;
    max-width: 620px;
  }

  @media (max-width: 1200px) {
    max-width: 215px;
  }

  @media (max-width: 960px) {
    width: 50%;
    max-width: unset;
    margin-bottom: 20px;
  }

  @media (max-width: 410px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Plus = styled.span`
  content: "+";
  font-size: 21px;
  color: #727272;
  font-weight: 700;
  position: absolute;
  right: -18px;
  top: 40px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
`;

const BlockContainer = styled.div`
 padding-top: 4.5em;
  padding-bottom: 4.65em;
  background-color: #fff;
`;

const ImageWrapper = styled.div`
  height: 90px;
`;

const featuresArr = [
  <>
    <ImageWrapper>
      <img src={Feature1} />
    </ImageWrapper>
    <h3>Поиск и рекрутинг кандидатов</h3>
    <p>
      Экономьте ваше время - находите лучших кандидатов за короткое время с
      помощью тестов
    </p>
  </>,
  <>
    <ImageWrapper>
      <img src={Feature2} />
    </ImageWrapper>
    <h3>Тестирование и оценка персонала</h3>
    <p>
      Проверяйте реальные навыки и таланты сотрудников через систему оценки
      персонала
    </p>
  </>,
  <>
    <ImageWrapper>
      <img src={Feature3} />
    </ImageWrapper>
    <h3>Поиск талантов и лидеров</h3>
    <p>
      Находите и взращивайте лидеров, которые приведут вашу компанию к успеху
    </p>
  </>,
  <>
    <ImageWrapper>
      <img style={{ marginTop: "-5px" }} src={Feature4} />
    </ImageWrapper>
    <h3>Коллектив без конфликтов</h3>
    <p>Выявляйте, предотвращайте и разрешайте кофликты в коллективе</p>
  </>,
];

const Features = () => {
  const listEl = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  const height = useMemo(() => {
    return listEl.current?.offsetHeight;
  }, [listEl.current?.offsetHeight]);

  return (
    <BlockContainer>
      <div className="container">
        <FeaturesList ref={listEl}>
          {featuresArr.map((item, idx, arr) => (
            <FeatureContainer key={idx} style={{ position: "relative" }}>
              {item}
              {idx !== 3 ? <Plus>+</Plus> : null}
            </FeatureContainer>
          ))}
        </FeaturesList>
      </div>
    </BlockContainer>
  );
};

export default Features;
