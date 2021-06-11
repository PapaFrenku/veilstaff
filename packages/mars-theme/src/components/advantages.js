import { useMemo } from "react";
import { Element } from "react-scroll";
import { connect, styled } from "frontity";
import config from "../config";
import { ReactSVG } from "react-svg";

import Avatar from "../assets/images/avatar.svg";
import LineChart from "../assets/images/line-chart.svg";
import Smartphone from "../assets/images/smartphone.svg";
import Clock from "../assets/images/clock.svg";
import Document from "../assets/images/document.svg";
import PhoneCall from "../assets/images/phone-call.svg";
import Trophy from '../assets/images/trophy.svg';


const Container = styled.div`
  background-color: #fff;
  padding-bottom: 140px;
  background: #fff;
  padding-top: 60px;
`;

const ModuleItem = styled.div`
  width: 266px;
  /* height: 246px; */
  margin-right: 50px;
  background: #f8f8f8;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 25px 20px;
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${config.collors.primary} 50%,
    #f8f8f8 50%
  );
  background-size: 100% 200%;
  background-position: bottom;
  transition: all 0.35s ease-out;
  &:nth-of-type(3n) {
    margin-right: 0;
  }
  &:hover {
    background-position: top;
    color: #fff;

    & svg {
      color: #fff;
    }
    & p {
      color: #fff;
    }
  }
`;

const ItemTitle = styled.h3`
  position: relative;
  line-height: 19px;
`;

const ItemContent = styled.p`
  color: #5c5c5c;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
`;

const AdvantagesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  padding: 55px;
`;

const IconWrapper = styled.div`
  position: relative;
  max-width: 90px;
  max-height: 90px;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  overflow: hidden;
  color: ${config.collors.primary};
  & div,
  svg {
    width: inherit;
    height: inherit;
  }
`;

const HeadingIcon = styled.div`
  color: #5c5c5c;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  margin: 0 auto;
  & svg {
    width: 50px;
    height: 50px;
  }
`

const Advantages = () => {
  const advantages = [
    {
      image: Avatar,
      title: "Определение талантов внутри коллектива",
      description:
        "Определяйте самых талантливых сотрудников и составляйте кадровый резерв",
    },
    {
      image: LineChart,
      title:
        " Возможность просмотра статистики по сотрудникам и отделам в динамике",
      description:
        "Наблюдайте за изменением оценок по навыкам среди сотрудников и получайте списки самых талантливых сотрудников / отделов",
    },
    {
      image: Smartphone,
      title: "Тестирование на мобильных устройствах",
      description: "Проходить тест можно на, планшетах и смартфонах.",
    },
    {
      image: Clock,
      title: "Минимальное время тестирования",
      description:
        "Прохождение опроса из 5-6 вопросов занимает 1,5 минуты в неделю. ",
    },
    {
      image: Document,
      title: "Наглядные и детальные отчеты и рекомендации",
      description:
        "16 видов отчетов и рейтингов в инфографике,  рекомендации по развитию вовлеченности как для сотрудников, так и руководителей.",
    },
    {
      image: PhoneCall,
      title: "Регулярная и эффективная обратная связь",
      description:
        "Еженедельные предложения по развитию компании и вовлеченности сотрудников",
    },
  ];
  return (
    <Container>
      <div className={"container"}>
      <HeadingIcon>
          <ReactSVG 
            src={Trophy} 
          />
        </HeadingIcon>
        <h2 style={{marginTop: "20px"}} className="blockTitle">ТОП 6 преимуществ нашего сервиса</h2>
        <AdvantagesList>
          {advantages.map((item) => (
            <ModuleItem key={item.title}>
              <IconWrapper>
                <ReactSVG fill={"inherit"} src={item.image} />
              </IconWrapper>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemContent>{item.description}</ItemContent>
            </ModuleItem>
          ))}
        </AdvantagesList>
      </div>
    </Container>
  );
};

export default connect(Advantages);
