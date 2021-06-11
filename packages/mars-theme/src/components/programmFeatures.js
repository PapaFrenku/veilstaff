import { Element } from "react-scroll";
import { connect, styled } from "frontity";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Gear from "../assets/images/gear.svg";
import { ReactSVG } from "react-svg";

const Container = styled.div`
  background-color: #fff;
  padding-top: 80px;
  padding-bottom: 140px;
`;

const TabsWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const HeadingIcon = styled.div`
  color: #5c5c5c;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  & svg {
    width: 50px;
    height: 50px;
  }
`;

const TabContent = styled.p`
  color: #5c5c5c;
  font-weight: 300;
  line-height: 24px;
  max-width: 620px;
`;
const conntent = [
  "То, насколько человек компетентен, напрямую отражается на его работе и работе всей организации целиком. Тестирование hard skills или навыков -- это не только способ определить, насколько компетентны текущие сотрудники, но и возможность оценить вероятных кандидатов на ваши позиции. С помощью библиотеки навыков можно составлять тесты для оценки именно тех навыков, которые требуется оценить, а с помощью календаря -- назначить их именно тем сотрудникам, знания которых требуют проверки.",
  "Nam vitae velit rutrum, volutpat felis sit amet, feugiat dolor",
  "Suspendisse ut risus sem. Mauris dapibus sed odio ut imperdiet. Ut dictum dictum sapien.",
  "Nam nisl risus, commodo vel felis ut, laoreet facilisis libero. Nam aliquet metus vel aliquet pretium. Nunc sodales quis leo ac maximus.",
  "Proin vel mauris et justo maximus vehicula. Suspendisse nec viverra mi. Nunc imperdiet ante in malesuada egestas. Pellentesque pulvinar",
  "То, насколько человек компетентен, напрямую отражается на его работе и работе всей организации целиком. Тестирование hard skills или навыков -- это не только способ определить, насколько компетентны текущие сотрудники, но и возможность оценить вероятных кандидатов на ваши позиции. С помощью библиотеки навыков можно составлять тесты для оценки именно тех навыков, которые требуется оценить, а с помощью календаря -- назначить их именно тем сотрудникам, знания которых требуют проверки.",
  "Nam vitae velit rutrum, volutpat felis sit amet, feugiat dolor",
  "Suspendisse ut risus sem. Mauris dapibus sed odio ut imperdiet. Ut dictum dictum sapien.",
  "Nam nisl risus, commodo vel felis ut, laoreet facilisis libero. Nam aliquet metus vel aliquet pretium. Nunc sodales quis leo ac maximus.",
  "Proin vel mauris et justo maximus vehicula. Suspendisse nec viverra mi. Nunc imperdiet ante in malesuada egestas. Pellentesque pulvinar",
];

const ProgrammFeatures = () => {
  return (
    <Element name="features" className="features" key={"display" + "features"}>
      <Container>
        <div className="container">
          <HeadingIcon>
            <ReactSVG src={Gear} />
          </HeadingIcon>
          <h2
            style={{ textAlign: "center", marginTop: "20px" }}
            className="blockTitle"
          >
            Возможности программы
          </h2>
          <TabsWrapper>
            <Tabs className="tabsContainer">
              <TabList className="tabsList" default={0}>
                <Tab className="tabItem" selectedClassName="selectedTab">
                  Подбор персонала
                </Tab>
                <Tab className="tabItem" selectedClassName="selectedTab">
                  Тестирование персонала
                </Tab>
                <Tab className="tabItem" selectedClassName="selectedTab">
                  Аттестация персонала
                </Tab>
                <Tab className="tabItem" selectedClassName="selectedTab">
                  Оценка мотивации персонала
                </Tab>
                <Tab className="tabItem" selectedClassName="selectedTab">
                  Оценка компетенций персонала
                </Tab>
                <Tab className="tabItem" selectedClassName="selectedTab">
                  Оценка лояльности персонала
                </Tab>
                <Tab className="tabItem" selectedClassName="selectedTab">
                  Динамика развития
                </Tab>
                <Tab className="tabItem" selectedClassName="selectedTab">
                  Обратная связь от руководителей и коллег
                </Tab>
              </TabList>
              {conntent.map((item) => (
                <TabPanel>
                  <TabContent>{item}</TabContent>
                </TabPanel>
              ))}
            </Tabs>
          </TabsWrapper>
        </div>
      </Container>
    </Element>
  );
};

export default connect(ProgrammFeatures);
