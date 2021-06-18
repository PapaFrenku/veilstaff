import { useState, useMemo } from "react";
import { styled, connect } from "frontity";
import { Element } from "react-scroll";
import config from "../config";
import Input from "./styles/input";
import Button from "./styles/button";
import NumberFormat from "react-number-format";
import {round} from 'lodash'

const CalculatorWrapper = styled.div`
  background-color: ${config.collors.primary};
  background: linear-gradient(
    337deg,
    rgba(71, 128, 255, 1) 0%,
    rgba(33, 120, 197, 1) 35%
  );
  height: 165px;
  color: #fff;

  @media(max-width: 990px) {
    height: auto;
  }
`;

const Container = styled.div`
  padding-left: 90px;
  padding-right: 90px;
  display: flex;
  height: inherit;
  align-items: center;

  & button {
     margin-right: 27px;
  }

  @media(max-width: 990px) {
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 28px;
    & button {
      width: 50%;
      margin: 0;
      margin-bottom: 20px;
    }
  }

  @media(max-width: 690px) {
    padding-left: 15px;
    padding-right: 15px;
    & button {
      width: 100%;
      margin: 0;
      margin-bottom: 20px;
    }
  }
`;

const Title = styled.h2`
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  line-height: 30px;
  margin: 0;
  text-align: right;
  @media(max-width: 990px) {
    margin-bottom: 10px;
  }
  @media(max-width: 690px) {
    text-align: center;
  }
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

  @media(max-width: 690px) {
    width: 100%;
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  width: 20%;
  margin-left: 28px;
  margin-right: 15px;

  @media(max-width: 990px) {
    margin-left: 0;
    margin-right: 0;
    width: 50%;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media(max-width: 690px) {
    width: 100%;
  }
`;

export const Calculator = () => {
  const [result, setResult] = useState();
  const [number, setNumber] = useState();

  const onClick = () => {
    if (number >= 1000) {
      setResult((number * config.calСoef) * 0.5);
    } else if (number >= 500) {
      setResult((number * config.calСoef) * 0.6);
    } else if (number >= 300) {
      setResult((number * config.calСoef) * 0.7);
    } else if (number >= 100) {
      setResult((number * config.calСoef) * 0.8);
    } else if (number < 100) {
      setResult(number * config.calСoef);
    }
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
                if (e.charCode === 13) {
                  onClick();
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
                  value={round(result, 3)}
                  displayType={"text"}
                  thousandSeparator={true}
                  style={{ fontSize: "22px" }}
                />
                <span>{` руб. в месяц`}</span>
              </>
            ) : (
              <span>
                от <span style={{ fontSize: "22px" }}>240</span> руб. за
                человека
              </span>
            )}
          </Text>
        </Container>
      </CalculatorWrapper>
    </Element>
  );
};

export default connect(Calculator);
