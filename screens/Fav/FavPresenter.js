// PanResponder --- React Native의 내장함수. 제스처를 인식하게 해 줌

// interpolate --- 움직인 값으로 부터 다른 값들을 비례해서 얻을 수 있게 해줌 (ex. x값에 따라 바뀌는 각도값 등)

import React, { useState } from "react";
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
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    //첫 번째 인자는 event, 두 번째 인자는 gestureState(공식 API 문서 참고)
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (eve, { dx, dy }) =>
      position.setValue({ x: dx, y: dy }),
    onPanResponderRelease: (eve, { dx, dy }) => {
      //start 함수 콜백함수로 사용 가능해서, 카드 index 값 올려서 없애주는 nextCard 함수 적용
      //discard to the left
      if (dx <= -200) {
        Animated.spring(position, {
          toValue: { x: -WIDTH, y: dy },
          useNativeDriver: true,
        }).start(nextCard);
        //discard to the right
      } else if (dx >= 200) {
        Animated.spring(position, {
          toValue: { x: WIDTH, y: dy },
          useNativeDriver: true,
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });
  const rotationValues = position.x.interpolate({
    //input 값과, 비례 적용 될 output 값 입력
    inputRange: [-200, 0, 200],
    outputRange: ["-5deg", "0deg", "5deg"],
    extrapolate: "clamp",
  });

  const secondCardOpacity = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [0.9, 0.2, 0.9],
    extrapolate: "clamp",
  });

  const secondCardScale = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });

  return (
    <Container>
      {results.map((result, index) => {
        //날려버린 카드 렌더링 안되게 최적화
        if (index < topIndex) {
          return null;
        }
        //첫 번째 카드
        if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
          //두 번째 카드
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
          // 두 번째 카드 뒤의 카드 (완전 투명하게 해서 안 보이게 함)
        } else {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};

export default FavPresenter;
