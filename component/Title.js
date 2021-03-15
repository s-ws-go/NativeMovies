//Title.js 가 Popular Movie 담은 Component 될 거임
import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 30px;
`;

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

Title.propTypes = {
  title: propTypes.string.isRequired,
};

export default Title;
