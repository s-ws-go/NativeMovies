import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../Api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin: 10px 0px 5px 0px;
`;

//여기 Title 컴포넌트는 공통으로 사용하는 "Title 컴포넌트"랑은 다른거야!
const Vertical = ({ id, poster, title, votes }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={apiImage(poster)} />
        <Title>{title.length > 15 ? `${title.slice(0, 15)}...` : title} </Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
};

export default Vertical;
