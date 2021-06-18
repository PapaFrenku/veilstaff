import { useMemo, useState, useEffect } from "react";
import { Element } from "react-scroll";
import { connect, styled } from "frontity";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Gear from "../assets/images/gear.svg";
import { ReactSVG } from "react-svg";

const Container = styled.div`
  background-color: #fff;
  padding-top: 80px;
  padding-bottom: 82px;

  
`;

const TabsWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 690px) {
    & .tabsList {
      width: 40%;
    }
    & .tabPannel {
      width: 60%;
    }
  }
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

  @media (max-width: 690px) {
    height: 60vh;
  }
`;

const ProgrammFeatures = ({ state, actions, libraries }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    const arr = [];
    for (let key in state.source.post) {
      if (state.source.post[key].acf.type === "features") {
        arr.push(state.source.post[key]);
      }
    }

    setData(arr);
  };

  useEffect(async () => {
    getData();
  }, []);

  const tabs = useMemo(() => {
    return data
      .map((item) => ({
        title: item.acf.title,
        content: item.acf.content,
        index: item.acf.index,
      }))
      .sort((a, b) => a.index - b.index);
  }, [data]);

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
                  <Tab
                    key={item.title}
                    className="tabItem"
                    selectedClassName="selectedTab"
                  >
                    {item.title}
                  </Tab>
                ))}
              </TabList>
              <div className="tabPannel">
                {tabs.map((item, idx) => (
                  <TabPanel key={idx}>
                    <TabContent>{item.content}</TabContent>
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </TabsWrapper>
        </div>
      </Container>
    </Element>
  );
};

export default connect(ProgrammFeatures);
