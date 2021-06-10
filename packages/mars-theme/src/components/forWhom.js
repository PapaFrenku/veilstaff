import { connect, styled } from "frontity";
import { Element } from "react-scroll";
import ItemIcon1 from "./../assets/images/forWhom1.png";
import ItemIcon2 from "./../assets/images/forWhom2.png";
import ItemIcon3 from "./../assets/images/forWhom3.png";

const ItemsList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
  align-items: center;

  & img {
    width: fit-content;
    height: fit-content;
  }

  & div {
    width: 33.33%;
    display: flex;
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
  }
`;

const AdditionalText = styled.p`
  color: #5c5c5c;
  font-size: 1em;
  line-height: 20px;
  font-weight: 300;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
  margin-bottom: 60px;
  margin-top: 30px;
`;

const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 60px;
`;

const items = () => [
  <div key="Руководители">
    <img src={ItemIcon1} alt="Руководители"></img>
    <p>Руководители</p>
  </div>,
  <div key="HR-менеджеры">
    <img src={ItemIcon2} alt="HR-менеджеры"></img>
    <p>HR-менеджеры</p>
  </div>,
  <div key="Руководители отделов персонала">
    <img src={ItemIcon3} alt="Руководители отделов персонала"></img>
    <p>Руководители отделов персонала</p>
  </div>,
];

const ForWhom = () => {
  return (
    <Container className="container">
      <h2 style={{ textAlign: "center" }} className="blockTitle">
        Для кого
      </h2>
      <AdditionalText>
        Программа предназначена для средних и крупных коммерческих компаний,
        бюджетных организаций и государственных предприятий.
      </AdditionalText>
      <ItemsList>{items().map((item) => item)}</ItemsList>
    </Container>
  );
};

export default connect(ForWhom);
