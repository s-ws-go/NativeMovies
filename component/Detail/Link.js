import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const Text = styled.Text`
  font-weight: bold;
  color: white;
  opacity: 0.7;
  margin-right: 10px;
`;

const Link = ({ onPress, text, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <Text>{text}</Text>
      <FontAwesome name={icon} size={16} color="white" />
    </Container>
  </TouchableOpacity>
);

export default Link;
