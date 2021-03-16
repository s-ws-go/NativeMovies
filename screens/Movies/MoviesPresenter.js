import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native";
import Slide from "../../component/movies/Slide";
import Title from "../../component/Title";
import Vertical from "../../component/Vertical";
import Horizontal from "../../component/Horizontal";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  /* web에서의 너비를 맞춰주기 위해 width에 100% 입력 */
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        //flex 기본방향이 column이라 저 삼항연산자 만으로는 로딩로고가 화면 세로 가운데로 안 온다.
        //flex가 화면 전체를 차지하는 명령을 넣어줘서 로딩때는 핸드폰 화면 한 가운데에 로딩로고가 오게끔 해 준다.
        //화면이 충분이 찼으므로 맨 아래 Horizontal Screen 구현을 위해 flex:1을 삭제

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
            {/* 수평선은 검은색이라 어차피 안 보임 */}
            <ScrollView
              style={{ marginVertical: 20 }}
              contentContainerStyle={{ paddingLeft: 30 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {popular.map((movie) => (
                <Vertical
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                  votes={movie.vote_average}
                />
              ))}
            </ScrollView>
            <Title title={"Coming Soon"}></Title>
            {upcoming.map((movie) => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                votes={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Container>
        </>
      )}
    </ScrollView>
  );
};
