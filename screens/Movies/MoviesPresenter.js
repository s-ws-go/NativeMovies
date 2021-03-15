import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native";
import Slide from "../../component/movies/Slide";
import Title from "../../component/Title";
import Vertical from "../../component/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        //flex 기본방향이 column이라 저 삼항연산자 만으로는 로딩로고가 화면 세로 가운데로 안 온다.
        //flex가 화면 전체를 차지하는 명령을 넣어줘서 로딩때는 핸드폰 화면 한 가운데에 로딩로고가 오게끔 해 준다.
        flex: 1,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" color="skyblue" />
      ) : (
        <>
          <SliderContainer>
            <Swiper controlsEnabled={false} loop timeout={3}>
              {nowPlaying.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  backgroundImage={movie.backdrop_path}
                  poster={movie.poster_path}
                />
              ))}
            </Swiper>
          </SliderContainer>
          <Container>
            <Title title={"Popular Movies"} />
            <ScrollView horizontal>
              {popular.map((movie) => (
                <Vertical
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                  votes={movie.vote_average}
                />
              ))}
            </ScrollView>
          </Container>
        </>
      )}
    </ScrollView>
  );
};
