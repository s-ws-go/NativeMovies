//로딩창을 통제하는 별도의 컴포넌트를 만들어서 각 탭에 적용함

import React from "react";
import styled, { ScrollView, ActivityIndicator } from "react-native";
import propTypes from "prop-types";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      flex: loading ? 1 : null,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator size="large" color="skyblue" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  loading: propTypes.bool.isRequired,
  children: propTypes.node.isRequired,
};

export default ScrollContainer;
