// PanResponder --- React Native의 내장함수. 제스처를 인식하게 해 줌

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
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (eve, { dx, dy }) =>
      // dx, dy는 x, y 의 distance_이동거리 개념이기 때문에 어느 위치든 한번 클릭하는 이벤트는 두 값이 모두 0이다(이동 x)
      position.setValue({ x: dx, y: dy }),
    //Release는 터치를 떼었을 때의 반응 설정 가능. spring함수는 애니메이션 설정 값을 천천히 0으로 만들어 주는 함수
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        // 여기다가 애니메이션 속성도 적용 가능(friction은 예시)
        friction: 20,
      }).start();
    },
  });
  return (
    <Container>
      {results.reverse().map((result, index) => {
        if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [...position.getTranslateTransform()],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
        return (
          <Animated.View
            style={{
              ...styles,
              //뒷 카드에는 transform 효과 삭제
            }}
            key={result.id}
            {...panResponder.panHandlers}
          >
            <Poster source={{ uri: apiImage(result.poster_path) }} />
          </Animated.View>
        );
      })}
    </Container>
  );
};

//저장할 때 마다 맨 아래사진하고 맨 위에 사진만 번갈아서 나옴.. --> 해결해야해

export default FavPresenter;
