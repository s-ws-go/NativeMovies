import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Dimensions } from "react-native";
import { apiImage } from "../../Api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled.View`
  top: 40px;
  width: 90%;
  height: ${HEIGHT / 1.5}px;
  position: absolute;
`;
const Poster = styled.Image`
  border-radius: 30px;
  width: 100%;
  height: 100%;
`;

const FavPresenter = ({ results }) => {
  return (
    <Container>
      {results.reverse().map((result) => (
        <Card key={result.id}>
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Card>
      ))}
    </Container>
  );
};

export default FavPresenter;
