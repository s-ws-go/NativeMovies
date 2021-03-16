//Horizontal(세로방향) 재사용을 위한 component

import React from "react";
import styled from "styled-components/native";
import Title from "./Title";

const Container = styled.View`
  margin-top: 20px;
`;

const ListSliders = ({ title, children }) => (
  <>
    <Title title={title} />
    <Container>{children}</Container>
  </>
);

export default ListSliders;
