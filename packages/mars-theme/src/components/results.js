import { styled, connect } from "frontity";
import { Element } from "react-scroll";
import config from "../config";
import ArrowInCircle from "./styles/ArrowInCircle";

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 32px;
  position: relative;
`;

const Subtitle = styled.p`
  margin: 0;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  margin-top: 20px;

  @media (max-width: 990px) {
    margin-bottom: 35px;
  }
`;

const ResultCard = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  width: calc(25% - 30px);
  border: 2px solid ${config.collors.primary};
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    ${config.collors.primary} 50%,
    #f8f8f8 50%
  );
  background-size: 100% 200%;
  background-position: bottom;
  color: #5c5c5c;
  transition: all 0.35s ease-out;
  flex-grow: 1;
  &:hover {
    background-position: top;
    color: #fff;

    & h4 {
      border-color: #fff;
    }
  }

  @media (max-width: 990px) {
    margin-left: 10px;
    margin-right: 10px;
    width: calc(33.333% - 20px);
    margin-bottom: 28px;
  }

  @media (max-width: 620px) {
    margin-left: 10px;
    margin-right: 10px;
    width: calc(50% - 20px);
    margin-bottom: 28px;
  }
`;

const ResultCardTitle = styled.h4`
  color: #fff;
  font-weight: 600;
  padding: 9px 14px;
  border-radius: 40px;
  display: inline-block;
  position: absolute;
  top: -19px;
  margin: 0;
  white-space: nowrap;
  transition: all 0.35s ease-out;
  background: ${config.collors.primary};
  border: 2px solid ${config.collors.primary};
`;

const ResultCardContent = styled.p`
  font-weight: 300;
  color: inherit;
  padding: 18px;
  // padding-top: 30px;
  text-align: center;
  line-height: 20px;
  margin: 0;
`;

const ResultsList = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  padding-top: 45px;
  padding-bottom: 48px;
  justify-content: center;

  @media (max-width: 990px) {
    flex-wrap: wrap;
    padding-bottom: 0;
    padding-top: 0;
  }
`;

const RecimendationCard = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  width: 25%;
  border: 2px solid ${config.collors.primary};
  border-radius: 10px;
  width: 33.33333333%;
  flex-grow: 1;

  @media (max-width: 990px) {
    margin-left: 10px;
    margin-right: 10px;
    width: calc(50% - 20px);
    margin-bottom: 20px;
  }
`;

const resultsList = [
  {
    title: "Общие рейтинги",
    content: (
      <ol
        style={{
          padding: 0,
          // paddingLeft: "12px",
          textAlign: "left",
        }}
      >
        <li
        style={{
          marginBottom: "5px",
        }}
        >Топ-20 <b>лучших</b> и <b>худших</b> <b>сотрудников</b> с учетом вовлеченности;</li>
        <li
        style={{
          marginBottom: "5px",
        }}
        >топ-10 <b>лучших</b> и <b>худших руководителей</b> с учетом вовлеченности;</li>
        <li
        style={{
          marginBottom: "5px",
        }}
        >топ сотрудников с <b>максимальной/минимальной</b> вовлечённостью;</li>
        <li
        style={{
          marginBottom: "5px",
        }}
        >топ <b>отделов</b> по <b>общей оценке</b></li>
      </ol>
    ),
  },
  {
    title: "По компетенциям",
    content: (
      <ol
        style={{
          padding: 0,
          // paddingLeft: "12px",
          textAlign: "left",
        }}
      >
        <li 
        style={{
          marginBottom: "5px",
        }}
        >Оценка <b>всех сотрудников</b> (коллеги / подчиненные / руководители);</li>
        <li
        style={{
          marginBottom: "5px",
        }}
        >средние оценки по <b>каждому отделу</b>;</li>
        <li
        style={{
          marginBottom: "5px",
        }}
        >сводный отчет по каждой <b>компетенции</b></li>
      </ol>
    ),
  },
  {
    title: "По вовлеченности",
    content: (
      <span>
        <ol
          style={{
            padding: 0,
            // paddingLeft: "12px",
            textAlign: "left",
          }}
        >
          <li
            style={{
              marginBottom: "5px",
            }}
          >
            Оценка всех <b>сотрудников</b> (коллеги / подчиненные / руководители);
          </li>
          <li
            style={{
              marginBottom: "5px",
            }}
          >
            оценка вовлеченности;
          </li>
          <li
            style={{
              marginBottom: "5px",
            }}
          >
            общая и средняя оценка;
          </li>
          <li>
            <b>средние</b> оценки по каждому <b>отделу</b>, по каждой
            <b>компетенции</b>
          </li>
        </ol>
      </span>
    ),
  },
  {
    title: "По навыкам",
    content: (
      <ol
      style={{
        padding: 0,
        // paddingLeft: "12px",
        textAlign: "left",
      }}
      >
        <li
        style={{
          marginBottom: "5px",
        }}
        >График <b>“паутинка”</b> с оценками по всем <b>навыкам</b>;</li>
        <li
        style={{
          marginBottom: "5px",
        }}
        >cредние оценки по <b>навыкам</b> для <b>руководителей</b>;</li>
        <li
        style={{
          marginBottom: "5px",
        }}
        >cредние оценки по <b>навыкам</b> для <b>сотрудников</b></li>
      </ol>
    ),
  },
  {
    title: "По сотрудникам",
    content: (
      <ol 
      style={{
        padding: 0,
        // paddingLeft: "12px",
        textAlign: "left",
      }}
      >
        <li
        style={{
          marginBottom: "5px",
        }}
        ><b>Динамика</b> прохождения <b>опроса</b></li>
        <li
        style={{
          marginBottom: "5px",
        }}
        ><b>cтрессоустойчивость и взаимодействие с людьми</b>;</li>
        <li
        style={{
          marginBottom: "5px",
        }}
        ><b>cписок талантов</b></li>
      </ol>
    ),
  },
];

const recomendations = [
  "Рекомендации по поднятию уровня вовлечённости сотрудников",
  "Рекомендации по разрешению конфликтов в коллективе",
  "Рекомендации по развитию навыков для сотрудников и руководителей",
];

const Results = () => {
  return (
    <Element
      name="getting-started"
      className="getting-started"
      key={"display" + "getting-started"}
    >
      <Container>
        <div className="container">
          <div style={{ margin: "0 auto", width: "65px", height: "1px" }}>
            <ArrowInCircle
              id="getting-started"
              color={config.collors.secondary}
            />
          </div>
          <h2 className="blockTitle">Результаты работы программы</h2>
          <Subtitle>Детальные отчёты</Subtitle>

          <ResultsList>
            {resultsList.map((item) => (
              <ResultCard key={item.title}>
                <ResultCardTitle>{item.title}</ResultCardTitle>
                <ResultCardContent>{item.content}</ResultCardContent>
              </ResultCard>
            ))}
          </ResultsList>
          <Subtitle>+ Рекомендации</Subtitle>
          <ResultsList>
            {recomendations.map((item) => (
              <RecimendationCard key={item}>
                <ResultCardContent>{item}</ResultCardContent>
              </RecimendationCard>
            ))}
          </ResultsList>
        </div>
      </Container>
    </Element>
  );
};

export default connect(Results);
