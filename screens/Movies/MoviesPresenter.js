import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
  background-color: red;
`;

const Section = styled.View``;

const Text = styled.Text``;

export default ({ loading, nowPlaying }) => {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="skyblue" />
      ) : (
        <Header>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Section key={movie.id}>
                <Text>{movie.original_title}</Text>
              </Section>
            ))}
          </Swiper>
        </Header>
      )}
    </Container>
  );
};
