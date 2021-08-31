import NotFoundIcon from "../assets/images/error-404.svg";
import React, { useState, useEffect, useMemo } from "react";
import Link from "@frontity/components/link";
import { styled, connect } from "frontity";
import CompetenceModule from './competenceModule'

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`

const CompetencePage = ({ state, actions, libraries }) => {
  return (
    <Container className="container">
      <div>
        <CompetenceModule />
      </div>
    </Container>
  );
};

export default connect(CompetencePage);