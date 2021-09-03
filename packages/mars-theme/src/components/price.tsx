import { styled } from "frontity";
import config from "../config";
import Button from "./styles/button";

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: #fff;
`;

const PriceCard = styled.div`
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 35px;

  border-radius: 60px;
  background: ${(props: any) => props.bgColor || "#fff"};
  box-shadow: ${(props: any) =>
    props.boxShadow || "0px 0px 30px rgba(0, 0, 0, 0.15);"};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props: any) => props.height || "634px"};
`;

const PriceCardCost = styled.p`
  margin: 0;
  font-size: ${(props: any) => props.fontSize || "48px"};
  line-height: 1.5em;
  font-weight: bold;
  color: ${(props: any) => props.color || "#000"};
  margin-top: 15%;
`;

const PriceCardTitle = styled.p`
  margin: 0;
  font-size: ${(props: any) => props.fontSize || "27px"};
  font-weight: bold;
  color: ${(props: any) => props.color || "#000"};
  line-height: 1.5em;
`;

const PriceContainer = styled.div`
  display: grid;
  grid-template-columns: 30% auto 30%;
  grid-gap: 45px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

const PriceCardContent = styled.div`
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  height: 40%;
  margin-top: 15%;
  width: 100%;

  color: ${(p) => p.color || "#000"};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Price = () => {
  return (
    <Container>
      <div className="container">
        <PriceContainer>
          <PriceCard>
            <PriceCardTitle>Заголовок 2</PriceCardTitle>
            <PriceCardCost>3.600₽</PriceCardCost>
            <span style={{ color: "#000" }}>в месяц</span>
            <PriceCardContent>Список различий...</PriceCardContent>
            <Button
              style={{ marginTop: "auto" }}
              brColor={config.collors.primary}
              color="#fff"
              bgColor={config.collors.primary}
            >
              Начать работу
            </Button>
          </PriceCard>
          <PriceCard
            height="732px" bgColor={"linear-gradient(90deg, #F2F2F2 0%, #E5ECFF 100%)"}
          >
            <PriceCardTitle fontSize={"26px"} color="#373737">
              Заголовок 2
            </PriceCardTitle>
            <PriceCardCost fontSize={"60px"} color="#373737">
              7.600₽
            </PriceCardCost>
            <span style={{ color: "#373737" }}>в месяц</span>
            <PriceCardContent>Список различий...</PriceCardContent>
            <Button
              style={{ marginTop: "auto" }}
              color="#fff"
              bgColor={config.collors.secondary}
              brColor={config.collors.secondary}
            >
              Начать работу
            </Button>
          </PriceCard>
          <PriceCard  bgColor={config.collors.primary}>
            <PriceCardTitle fontSize={"26px"} color="#fff">
              Заголовок 2
            </PriceCardTitle>
            <PriceCardCost fontSize={"60px"} color="#fff">
              4.600₽
            </PriceCardCost>
            <span style={{ color: "#fff" }}>в месяц</span>
            <PriceCardContent color="#fff">Список различий...</PriceCardContent>
            <Button
              style={{ marginTop: "auto" }}
              brColor="#fff"
              color={config.collors.primary}
              bgColor={"#fff"}
            >
              Начать работу
            </Button>
          </PriceCard>
        </PriceContainer>
      </div>
    </Container>
  );
};

export default Price;
