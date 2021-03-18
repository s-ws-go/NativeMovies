import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Trimtext } from "../Utils";
import Poster from "./Poster";
import Votes from "./Votes";

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
const Vertical = ({ id, poster, title, votes, isTv = false }) => {
  const navigation = useNavigation();
  const gotoDetail = () => {
    navigation.navigate("Detail", {
      id,
      poster,
      title,
      votes,
      isTv,
    });
  };
  return (
    <TouchableOpacity onPress={gotoDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{Trimtext(title, 15)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string,
  title: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
};

export default Vertical;
