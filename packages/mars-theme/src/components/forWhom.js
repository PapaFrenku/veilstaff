import React from "react";
import { connect, styled } from "frontity";
import { Element } from "react-scroll";
import config from "../config";
import ItemIcon1 from "./../assets/images/forWhom1.png";
import ItemIcon2 from "./../assets/images/forWhom2.png";
import ItemIcon3 from "./../assets/images/forWhom3.png";
import ArrowInCircle from "./styles/ArrowInCircle";

const ItemsList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  align-items: center;
  /* flex-wrap: wrap; */
  & img {
    width: fit-content;
    height: fit-content;
  }

  & div {
    width: 33.3333%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & p {
    margin: 0;
    padding: 0;
    font-size: 1.125em;
    font-weight: 600;
    max-width: 185px;
    text-align: center;
    line-height: 20px;
    margin-top: 25px;
  }

  @media (max-width: 767px) {
    align-items: baseline;
    & > div {
      margin-bottom: 0;
    }
    p {
      font-size: 16px;
      margin-top: 15px;
    }
    & img {
      width: 40px;
      height: auto;
    }
  }
`;

const AdditionalText = styled.p`
  font-size: 1em;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 20px;

  /* @media(max-width: 690px) {
    margin-bottom: 0px;
  } */
`;

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 72px;
  position: relative;

  @media (max-width: 767px) {
    padding-bottom: 40px;
  }
`;

const DottedLine = styled.span`
  position: absolute;
  width: 100px;
  height: 1px;
  border-top: 1px dotted #5c5c5c;
  right: -45px;

  @media (max-width: 767px) {
    
    width: 200px;
    bottom: -20px;
    left: calc(50% - 100px);
    display: none;
  }
`;

const items = () => [
  <>
    <img src={ItemIcon1} alt="Руководители"></img>
    <p>Руководители</p>
  </>,
  <>
    <img src={ItemIcon2} alt="HR-менеджеры"></img>
    <p>HR-менеджеры</p>
  </>,
  <>
    <img src={ItemIcon3} alt="Руководители отделов персонала"></img>
    <p>Руководители отделов</p>
  </>,
];

const ForWhom = () => {
  const [s, setS] = React.useState(false);
  const listEl = React.useRef();

  const height = React.useMemo(() => {
    return listEl.current?.offsetHeight || "auto";
  }, [listEl, s]);

  React.useEffect(() => {
    setTimeout(() => {
      setS(true);
    }, 0);
  }, []);

  return (
    <Container className="container">
      <Element name="forWhom" className="forWhom" key={"display" + "forWhom"}>
        <div style={{ margin: "0 auto", width: "65px", height: "1px" }}>
          <ArrowInCircle id="forWhom" color={config.collors.secondary} />
        </div>
        <h2 style={{ textAlign: "center" }} className="blockTitle">
          Для кого
        </h2>
        <AdditionalText>
          Программа предназначена для средних и крупных коммерческих компаний,
          бюджетных организаций и государственных предприятий.
        </AdditionalText>

        <ItemsList ref={listEl}>
          {items().map((item, idx) => (
            <div key={idx} style={{ position: "relative", height: 'auto' }}>
              {item}
              {idx !== 2 ? <DottedLine /> : null}
            </div>
          ))}
        </ItemsList>
      </Element>
    </Container>
  );
};

export default connect(ForWhom);
