import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View>
    <Text>movies</Text>
    <Button
      title="Movie"
      onPress={() => {
        navigation.navigate("Detail");
      }}
    ></Button>
  </View>
);
