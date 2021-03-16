import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { apiImage } from "../Api";
import Poster from "./Poster";
import Votes from "./Votes";

const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 30px;
  margin-bottom: 30px;
`;

const Data = styled.View``;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Horizontal = ({ id, poster, title, votes, overview }) => (
  <Container>
    <Poster url={apiImage(poster)}></Poster>
    <Data>
      <Title>{title}</Title>
      <Votes votes={votes} />
    </Data>
  </Container>
);

Horizontal.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
  overview: propTypes.string.isRequired,
};

export default Horizontal;
