import React, { useRef, useMemo, useEffect, useState } from "react";
import { styled } from "frontity";
import { Element } from "react-scroll";
import Feature1 from "../assets/images/feature1.png";
import Feature2 from "../assets/images/feature2.png";
import Feature3 from "../assets/images/feature3.png";
import Feature4 from "../assets/images/feature4.png";
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

  & img {
    width: fit-content;
    height: auto;
  }
  & h4 {
    text-align: center;
    margin-top: 30px;
    font-size: 1.2em;
    margin-top: 30px;
    margin-bottom: 0;
    font-weight: 600;
    max-width: 200px;
  }
  & p {
    text-align: center;
    font-size: 14px;
    margin: 0;
    margin-top: 20px;
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const BlockContainer = styled.div`
  padding-top: 4em;
  padding-bottom: 6.25em;
  background-color: #fff;
`;

const ImageWrapper = styled.div`
  height: 120px;
`;

const featuresArr = [
  <FeatureContainer key={1}>
    <ImageWrapper>
      <img src={Feature1} />
    </ImageWrapper>
    <h4>Поиск и рекрутинг кандидатов</h4>
    <p>
      Экономьте ваше время - находите лучших кандидатов за короткое время с
      помощью тестов
    </p>
  </FeatureContainer>,
  <FeatureContainer key={2}>
    <ImageWrapper>
      <img src={Feature2} />
    </ImageWrapper>
    <h4>Тестирование и оценка персонала</h4>
    <p>
      Проверяйте реальные навыки и таланты сотрудников через систему оценки
      персонала
    </p>
  </FeatureContainer>,
  <FeatureContainer key={3}>
    <ImageWrapper>
      <img src={Feature3} />
    </ImageWrapper>
    <h4>Поиск талантов и лидеров</h4>
    <p>
      Находите и взращивайте лидеров, которые приведут вашу компанию к успеху
    </p>
  </FeatureContainer>,
  <FeatureContainer key={4}>
    <ImageWrapper>
      <img src={Feature4} />
    </ImageWrapper>
    <h4>Коллектив без конфликтов</h4>
    <p>Выявляйте, предотвращайте и разрешайте кофликты в коллективе</p>
  </FeatureContainer>,
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

  console.log(height, listEl);
  return (
      <BlockContainer>
        <div className="container">
          <FeaturesList ref={listEl}>
            {featuresArr.map((item, idx) => (
              <div key={idx} style={{ height: `${height}px` }}>
                {item}
              </div>
            ))}
          </FeaturesList>
        </div>
      </BlockContainer>
  );
};

export default Features;
