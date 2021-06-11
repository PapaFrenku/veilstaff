import { Element } from "react-scroll";
import { connect, styled } from "frontity";
import { ReactSVG } from "react-svg";
import DegressIcon from "../assets/images/360-degrees.svg";
import VirtualReality from "../assets/images/virtual-reality.svg";
import Test from "../assets/images/test.svg";
import FeedBack from "../assets/images/feedback.svg";
import Microphone from "../assets/images/microphone.svg";
import Growth from "../assets/images/growth.svg";
import config from "../config";
import ArrowInCircle from './styles/ArrowInCircle';
import AppScreenList from "./appScreenList";

const Container = styled.div`
  background-color: #fff;
  padding-bottom: 140px;
  background: #f8f8f8;
  padding-top: 60px;
  position: relative;
`;

const ModuleItem = styled.div`
  width: 266px;
  height: 246px;
  margin-right: 50px;
  background: #fff;
  margin-bottom: 40px;
  border-radius: 10px;
  padding: 35px 20px;
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${config.collors.primary} 50%,
    #fff 50%
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

const ModulesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 55px;
`;

const IconWrapper = styled.div`
  position: relative;
  max-width: 90px;
  max-height: 90px;
  width: 90px;
  height: 90px;
  margin: 0 auto;
  overflow: hidden;
  color: ${config.collors.secondary};
  & div,
  svg {
    width: inherit;
    height: inherit;
  }
`;

const modules = () => [
  {
    image: DegressIcon,
    title: "Модуль оценки 360",
    content: "По SoftSkill для всех сотрудников",
  },
  {
    image: VirtualReality,
    title: "Расширенный модуль оценки 360",
    content: "Перманентная оценка персонала по навыкам и компетенциям",
  },
  {
    image: Test,
    title: "Модуль тестирования",
    content:
      "Для оценки профессиональных знаний сотрудников. Имеет хх настроек *",
  },
  {
    image: FeedBack,
    title: "Модуль обратной связи",
    content:
      "Позволяет получить достоверную анонимную информацию от сотрудников",
  },
  {
    image: Microphone,
    title: "Модуль пульс опросов",
    content: "По SoftSkill для всех сотрудников",
  },
  {
    image: Growth,
    title: "Модуль оценки 360",
    content: "По SoftSkill для всех сотрудников",
  },
];

console.log(modules());

const Modules = () => {
  return (
    <Element name="modules" className="modules" key={"display" + "modules"}>
      <Container>
        <div className="container">
          <div style={{ margin: "0 auto", width: "65px", height: "1px" }}>
            <ArrowInCircle color={config.collors.secondary} />
          </div>
          <h2 style={{ textAlign: "center" }} className="blockTitle">
            Модули, входящие в состав программы
          </h2>
          <ModulesList>
            {modules().map((item) => (
              <ModuleItem key="m1">
                <IconWrapper>
                  <ReactSVG fill={"inherit"} src={item.image} />
                </IconWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemContent>{item.content}</ItemContent>
              </ModuleItem>
            ))}
          </ModulesList>
        </div>
      </Container>
    </Element>
  );
};

export default connect(Modules);
