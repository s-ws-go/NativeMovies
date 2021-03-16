import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { apiImage } from "../../Api";
import { TouchableOpacity } from "react-native";
import { Trimtext } from "../../Utils";
import Votes from "../Votes";
import Poster from "../Poster";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;
const VotesContainer = styled.View`
  margin-bottom: 8px;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 14px;
`;

const Button = styled.View`
  margin-top: 5px;
  background-color: #d63031;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    {/* 이미지 컴포넌트는 리액트 네이티브 내장 컴포넌트임 */}
    <BG source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={poster} />
      <Data>
        <Title>{Trimtext(title, 30)}</Title>
        <VotesContainer>
          <Votes votes={votes} />
        </VotesContainer>
        <Overview>{Trimtext(overview, 100)}</Overview>
        {/* TouchableOpacity__누를 수 있는 컴포넌트네.. 네이티브 자체 제공 */}
        <TouchableOpacity>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </TouchableOpacity>
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
