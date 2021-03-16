import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView, View } from "react-native";
import Slide from "../../component/movies/Slide";
import Title from "../../component/Title";
import Vertical from "../../component/Vertical";
import Horizontal from "../../component/Horizontal";
import ScrollContainer from "../../component/ScrollContainer";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  /* web에서의 너비를 맞춰주기 위해 width에 100% 입력 */
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 30px;
`;

const Container = styled.View``;

// 컴포넌트 이름은 항상 대문자시작!!
const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, today, thisWeek, topRated, popular }) => {
  return (
    <ScrollContainer loading={loading}>
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}></Swiper>
        </SliderContainer>
        <Container>
          <Title title={"Popular Tv"} />
          {/* 수평선은 검은색이라 어차피 안 보임 */}
          <ScrollView
            style={{ marginVertical: 20 }}
            contentContainerStyle={{ paddingLeft: 30 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          ></ScrollView>
          <Title title={"Coming Soon"}></Title>
          <UpcomingContainer></UpcomingContainer>
        </Container>
      </>
    </ScrollContainer>
  );
};
