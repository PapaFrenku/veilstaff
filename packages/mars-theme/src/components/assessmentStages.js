import { useMemo } from "react";
import { Element } from "react-scroll";
import { connect, styled } from "frontity";
import config from "../config";
import ArrowInCircle from './styles/ArrowInCircle';

const Container = styled.div`
  background-color: #f8f8f8;
  padding-top: 40px;
  padding-bottom: 72px;
  position: relative;
`;

const HeadText = styled.p`
  font-weight: 300;
  color: #5c5c5c;
  line-height: 19px;
  text-align: center;
  max-width: 435px;
  margin: 0 auto;
  margin-top: 17px;
`;

const StageList = styled.div`
  padding: 0;
  list-style: none;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding-top: 45px;
`;

const StageListCol = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 40%;
  &:last-of-type {
    margin-left: 80px;
  }
`;

const StageItem = styled.li`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StageCounter = styled.span`
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding-top: 10px;
  border-radius: 50%;
  background-color: ${config.collors.secondary};
  color: #fff;
  font-weight: 600;
  margin-right: 15px;
`;

const StageText = styled.span`
  color: #5c5c5c;
  font-weight: 300;
  line-height: 19px;
  display: inline-block;
  flex-grow: 1;
`;

const AssessmentStages = () => {
  const stages = [
    "Уточнение потребностей клиента (soft skills / hard skills / вовлеченность) -- что именно необходимо тестировать",
    "Выявление структуры компании, занесение ее в программу, выявление сотрудников, тестирование которых необходимо",
    "Запуск тестирования с оповещениями всех сотрудников",
    "Процесс тестирования",
    "Cоздание отчетов (по всей компании, по отделам / сотрудникам)",
    "Представление полной аналитики клиенту",
    "Проведение следующих тестов / опросов и анализ изменений оценки по ним в динамике",
    "Полный отчет проведенной оценки сотрудников",
  ];

  const stages1 = useMemo(() => {
    const length = Math.ceil(stages.length / 2);
    const arr = [...stages];
    return arr.slice(0, length);
  }, [stages]);

  const stages2 = useMemo(() => {
    const length = Math.ceil(stages.length / 2);
    const arr = [...stages];
    return arr.slice(length, arr.length);
  }, [stages]);
  return (
    <Container>
      <div className="container">
        <div style={{ margin: "0 auto", width: "65px", height: "65px" }}>
          <ArrowInCircle />
        </div>
        <h2 className="blockTitle">Этапы проведения оценки</h2>
        <HeadText>
          Подготовка программы оценки (определение сроков, целей, объемов,
          возможных результатов оценки)
        </HeadText>
        <StageList>
          <StageListCol>
            {stages1.map((text, idx) => (
              <StageItem key={text}>
                <StageCounter>{idx + 1}</StageCounter>
                <StageText>{text}</StageText>
              </StageItem>
            ))}
          </StageListCol>
          <StageListCol>
            {stages2.map((text, idx) => (
              <StageItem key={text}>
                <StageCounter>{stages1.length + idx}</StageCounter>
                <StageText>{text}</StageText>
              </StageItem>
            ))}
          </StageListCol>
        </StageList>
      </div>
    </Container>
  );
};

export default connect(AssessmentStages);
