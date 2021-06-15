import { useState, useMemo } from "react";
import { styled, connect } from "frontity";
import { Element } from "react-scroll";
import config from "../config";
import Input from "./styles/input";
import Button from "./styles/button";
import NumberFormat from "react-number-format";

const CalculatorWrapper = styled.div`
  background-color: ${config.collors.primary};
  background: linear-gradient(
    337deg,
    rgba(71, 128, 255, 1) 0%,
    rgba(33, 120, 197, 1) 35%
  );
  height: 165px;
  color: #fff;
`;

const Container = styled.div`
  padding-left: 90px;
  padding-right: 90px;
  display: flex;
  height: inherit;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  line-height: 30px;
  margin: 0;
  text-align: right;
`;

const Text = styled.p`
  margin: 0;
  font-weight: 600;
  color: inherit;
  white-space: nowrap;
  width: 22%;
  font-size: 18px;

  & span {
    font-size: inherit;
  }
`;

const InputWrapper = styled.div`
  width: 20%;
  margin-left: 28px;
  margin-right: 15px;
`;

export const Calculator = () => {
  const [result, setResult] = useState();
  const [number, setNumber] = useState();

  const onClick = () => {
    setResult(number * config.calСoef);
  };

  const onChange = (val) => {
    setNumber(Number(val));
  };

  return (
    <Element
      name="calculator"
      className="calculator"
      key={"display" + "calculator"}
    >
      <CalculatorWrapper>
        <Container className="container">
          <Title> Калькулятор расчета стоимости</Title>
          <InputWrapper>
            <Input
              brCol="#fff"
              value={number}
              onChange={(e) => onChange(e.currentTarget.value)}
              placeholder="Кол-во человек"
              onKeyPress={(e) => {
                if(e.charCode === 13) {
                    onClick()
                }
              }}
              type="number"
            />
          </InputWrapper>
          <Button
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
            style={{ marginRight: "27px" }}
            color={config.collors.primary}
            brColor={"#fff"}
            bgColor="#fff"
          >
            <span>Рассчитать</span>
          </Button>
          <Text>
            {result ? (
              <>
                <span>{`от `}</span>
                <NumberFormat
                  value={result}
                  displayType={"text"}
                  thousandSeparator={true}
                  style={{fontSize: "22px"}}
                />
                <span>{` руб. в месяц`}</span>
              </>
            ) : (
              <span>от <span style={{fontSize: "22px"}}>240</span> руб. за человека</span>
            )}
          </Text>
        </Container>
      </CalculatorWrapper>
    </Element>
  );
};

export default connect(Calculator);
