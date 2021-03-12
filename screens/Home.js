import React from "react";
import { View, Text, Button } from "react-native";

//stack.js 의 Stack.screen 에서 전달 해 주는 prop이 navigation임.
export default ({ navigation }) => (
  <View>
    <Text>home</Text>
    <Button
      //navigate 의 인자 Detail 은 불러올 스크린의 이름을 그대로 넣어 줌
      onPress={() => navigation.navigate("Detail")}
      title="Go to Detail!"
    ></Button>
  </View>
);
