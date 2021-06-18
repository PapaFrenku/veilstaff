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

  @media(max-width: 990px) {
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

  @media(max-width: 990px) {
    margin-left: 10px;
    margin-right: 10px;
    width: calc(33.333% - 20px);
    margin-bottom: 28px;
  }

  @media(max-width: 620px) {
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
  text-align: center;
  line-height: 20px;
`;

const ResultsList = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  padding-top: 45px;
  padding-bottom: 48px;
  justify-content: center;

  @media(max-width: 990px) {
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

  @media(max-width: 990px) {
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
      <span>
        Топ-20 лучших и худших сотрудников с учетом вовлеченности Топ-10 лучших
        и худших руководителейс учетом вовлеченности Топ сотрудников с
        максимальной/минимальной вовлечённостью Топ отделов по общей оценке"
      </span>
    ),
  },
  {
    title: "По компетенциям",
    content: (
      <span>
        Оценка всех сотрудников (коллеги / подчиненные / руководители) Средние
        оценки по каждому отделу Сводный отчет по каждой компетенции
      </span>
    ),
  },
  {
    title: "По вовлеченности",
    content: (
      <span>
        Оценка всех сотрудников (коллеги / подчиненные / руководители) Оценка
        вовлеченности; общая и средняя оценка; Отчет по отделам: средние оценки
        по каждому отделу по каждой компетенции"
      </span>
    ),
  },
  {
    title: "По навыкам",
    content: (
      <span>
        График “паутинка” с оценками по всем навыкамСредние оценки по навыкам
        для руководителей Средние оценки по навыкам для сотрудников"
      </span>
    ),
  },
  {
    title: "По сотрудникам",
    content: (
      <span>
        Динамика прохождения опроса Стрессоустойчивость и взаимодействие с
        людьми (худшие) Список талантов"
      </span>
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
