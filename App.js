import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";

//cacheImages 는 image들의 array로 구성 예정
//else문의 asset은 expo의 내장 라이브러리로, 외부 asset으로의 접근을 허용해 줌
const cacheImages = (images) => {
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
//font 를 주면 그 font 가 Font.loadAsync 로 들어가 해당 폰트를 불러온다
const cacheFonts = (fonts) => {
  fonts.map((font) => [Font.loadAsync(font)]);
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1615450112423-f724345c306f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      require("./assets/splash.png"),
    ]);
    console.log(images);
    const fonts = cacheFonts([Ionicons.font]);
    //image array 와 font array를 promise 형태로 받고, 이걸 퓨전함
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => {
    setIsReady(true);
  };
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
