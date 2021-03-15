// 여러 컴포넌트에서 쓰이는 Votes 를 위해 별도의 컴포넌트를 따로 만들어 준다.

import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 16px;
  font-weight: 600;
`;

const Votes = ({ votes }) => <Container>★ {votes} / 10</Container>;

export default Votes;
