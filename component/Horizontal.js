import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { formatdate, Trimtext } from "../Utils";
import Poster from "./Poster";

const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 30px;
  margin-bottom: 30px;
`;

const Data = styled.View`
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
`;

const Release = styled.Text`
  color: white;
`;

const Firstair = styled.Text`
  color: white;
`;

const Overview = styled.Text`
  color: white;
  margin-top: 5px;
`;

const Horizontal = ({ id, poster, title, overview, releasedate, firstair }) => {
  const navigation = useNavigation();
  const gotoDetail = () => {
    navigation.navigate("Detail", {
      id,
      poster,
      title,
      overview,
      releasedate,
      firstair,
      isTv: false,
    });
  };
  return (
    <TouchableOpacity onPress={gotoDetail}>
      <Container>
        <Poster url={poster}></Poster>
        <Data>
          <Title>{Trimtext(title, 30)}</Title>
          {/* TV창에 컴포넌트 그대로 활용하기 위해 releasedate 부분은 조건으로 설정(TV에는 개봉일 없으니까) */}
          {releasedate ? (
            <Release>{formatdate(releasedate)} 개봉</Release>
          ) : (
            <Firstair>{formatdate(firstair)} 첫 방송</Firstair>
          )}
          <Overview>{Trimtext(overview, 100)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string,

  title: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  releasedate: propTypes.string,
};

export default Horizontal;
