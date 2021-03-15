import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../Api";
import Votes from "./Votes";

const Container = styled.View``;

const Title = styled.Text`
  color: white;
`;

//여기 Title 컴포넌트는 공통으로 사용하는 "Title 컴포넌트"랑은 다른거야!
const Vertical = ({ poster, title, votes }) => {
  return (
    <Container>
      <Poster url={apiImage(poster)} />
      <Title>{title}</Title>
      <Votes votes={votes} />
    </Container>
  );
};

Vertical.propTypes = {
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
};

export default Vertical;
