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
        // useNativeDriver 관련 오류 발생해서 코멘트 보고 따로 추가 해 줌.
        useNativeDriver: true,
        // 여기다가 애니메이션 속성도 적용 가능(friction은 예시)
        friction: 20,
      }).start();
    },
  });
  const rotationValues = position.x.interpolate({
    //input 값과, 비례 적용 될 output 값 입력
    inputRange: [-200, 0, 200],
    outputRange: ["-5deg", "0deg", "5deg"],
    //최대, 최소값을 input, output 만큼 제한시킴(-10, 10 이상 이하로 안 움직임)
    extrapolate: "clamp",
  });

  return (
    <Container>
      {results.map((result, index) => {
        if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  //interpolate 적용한 애들 transform의 rotate값으로 설정시켜 줌
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
        }
        return (
          <Animated.View
            style={{
              ...styles,
              zIndex: -index,
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
