import { Element } from "react-scroll";
import React, { useState, useEffect, useMemo } from "react";
import Link from "@frontity/components/link";
import { styled, connect } from "frontity";
import config from "../config";
import { Competence, CompetencesList } from "../components/competencesList";
import ArrowInCircle from "./styles/ArrowInCircle";
import _ from "lodash";

const ListWrapper = styled.div`
  padding-top: 55px;
  padding-bottom: 70px;
`;

const Container = styled.div`
  padding-bottom: 40px;
  padding-top: 45px;
  position: relative;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0;
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  margin-top: 20px;
  margin: 0 auto;
  margin-top: 20px;
`

const CompetenceModule = ({ state, actions, libraries }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    if (data.length === 0) {
      let arr = [];
      const res = await fetch(
        "https://veilstaff.com/index.php/wp-json/wp/v2/posts"
      ).then((res) => res.json());
      if (_.isArray(res)) {
        res.forEach((val: any) => {
          if (val.acf.type === "competence") {
            arr.push(val.acf);
          }
        });
        const obj = _.mapValues(_.keyBy(res, 'id'), 'acf')
        
        arr = arr.map((item) => {
          if (!_.isEmpty(item.skills)) {
            return {
              ...item,
              skills: [...item.skills.map((id) => obj[`${id}`])],
            };
          }
          return { ...item };
        });
        console.log(arr)
        setData(arr);
      }
    }
  };

  // console.log(data, state.source.post);

  useEffect(() => {
    getData();
  }, [state.source.post]);

  return (
    <Element
      name="competences"
      className="competences"
      key={"display" + "competences"}
    >
      <Container>
        <h2 style={{ textAlign: "center" }} className="blockTitle">
          Библиотека компетенций
        </h2>
        <Description><b>Компетенции</b> – атрибуты личности, которые важны для эффективного выполнения работы на соответствующей позиции, и которые могут быть измерены через наблюдаемое поведение.  Как как правило компетенции состоят из знаний, навыков, способностей, мотивации, личностных особенностей. Знания и навыки это то, что относительно легко развивается.</Description>
        <ListWrapper>
          <CompetencesList competences={data} />
        </ListWrapper>
      </Container>
    </Element>
  );  
};

export default connect(CompetenceModule);
