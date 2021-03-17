import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import Slide from "../../component/movies/Slide";
import Vertical from "../../component/Vertical";
import Horizontal from "../../component/Horizontal";
import ScrollContainer from "../../component/ScrollContainer";
import HorizontalSliders from "../../component/HorizontalSliders";
import ListSliders from "../../component/ListSliders";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  /* web에서의 너비를 맞춰주기 위해 width에 100% 입력 */
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming, refreshFn }) => {
  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
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
        {/* 여기 타이틀 써준게 HorizontalSliders의 props로 들어가서 제목으로 표시되는겨. 중요!! */}
        <HorizontalSliders title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSliders>
        <ListSliders title="Coming Soon">
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              releasedate={movie.release_date}
              overview={movie.overview}
            />
          ))}
        </ListSliders>
      </Container>
    </ScrollContainer>
  );
};
