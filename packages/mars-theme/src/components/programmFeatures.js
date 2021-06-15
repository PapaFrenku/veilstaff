import { useMemo, useState, useEffect } from "react";
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
];

const ProgrammFeatures = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "http://91.201.41.228/index.php/wp-json/wp/v2/programm-features"
    );
    const arr = await res.json();
    if (Array.isArray(arr)) {
      setData(arr);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const tabs = useMemo(() => {
    return data.map((item) => ({
      title: item.advantage_title,
      content: item.advantage_content,
      index: item.advantage_index
    })).sort((a, b) => a.index - b.index)
  }, [data]);

  console.log(tabs)

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
                {tabs.map((item) => (
                  <Tab key={item.title} className="tabItem" selectedClassName="selectedTab">
                    {item.title}
                  </Tab>
                ))}
              </TabList>
              {tabs.map((item, idx) => (
                <TabPanel key={idx}>
                  <TabContent>{item.content}</TabContent>
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
