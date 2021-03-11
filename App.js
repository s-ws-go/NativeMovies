import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";

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

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1615450112423-f724345c306f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      require("./assets/splash.png"),
    ]);
    console.log(images);
  };

  const onFinish = () => {
    setIsReady(true);
  };
  return isReady ? (
    <Text>Ready!</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
