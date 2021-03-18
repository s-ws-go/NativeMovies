// PanResponder --- React Native의 내장함수. 제스처를 인식하게 해 줌

import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Dimensions, PanResponder, Animated } from "react-native";
import { apiImage } from "../../Api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Poster = styled.Image`
  border-radius: 30px;
  width: 100%;
  height: 100%;
`;

const styles = {
  top: 40,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

const FavPresenter = ({ results }) => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (eve, { dx, dy }) =>
      position.setValue({ x: dx, y: dy }),
  });
  return (
    <Container>
      {results.reverse().map((result) => (
        //일반 View에는 Animation을 넣을 수가 없어서 Animated.View로 컴포넌트를 수정 해 줘야 함.
        <Animated.View
          style={{
            ...styles,
            //transform 넣을 때 배열형태로 넣어줘야 해.(이거는 API 홈페이지에 안 나오는데...)
            transform: [...position.getTranslateTransform()],
          }}
          key={result.id}
          {...panResponder.panHandlers}
        >
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Animated.View>
      ))}
    </Container>
  );
};

export default FavPresenter;
