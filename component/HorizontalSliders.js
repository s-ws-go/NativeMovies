import React from "react";
import propTypes from "prop-types";
import { ScrollView, View } from "react-native";
import Title from "./Title";

const HorizontalSliders = ({ title, children }) => (
  <View>
    {/* ????????????? */}
    <Title title={title} />
    <ScrollView
      style={{ marginVertical: 20 }}
      contentContainerStyle={{ paddingLeft: 30 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </View>
);

HorizontalSliders.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default HorizontalSliders;
