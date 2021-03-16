import React from "react";
import propTypes from "prop-types";
import { ScrollView } from "react-native";
import Title from "./Title";

const HorizontalSliders = ({ title, children }) => (
  <>
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
  </>
);

HorizontalSliders.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default HorizontalSliders;
