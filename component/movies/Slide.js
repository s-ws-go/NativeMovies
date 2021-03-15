import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { apiImage } from "../../Api";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
`;
const Data = styled.View`
  width: 50%;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;
const Votes = styled.Text`
  color: white;
  opacity: 0.7;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.7;
`;

const Slide = ({ id, title, backgroundImage, votes, overview }) => (
  <Container>
    {/* 이미지 컴포넌트는 리액트 네이티브 내장 컴포넌트임 */}
    <BG source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Data>
        <Title>{title}</Title>
        <Votes>{votes} / 10</Votes>
        <Overview>{overview}</Overview>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  backgroundImage: propTypes.string.isRequired,
  votes: propTypes.number.isRequired,
  overview: propTypes.string.isRequired,
};

export default Slide;
