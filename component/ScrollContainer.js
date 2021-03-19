//로딩창을 통제하는 별도의 컴포넌트를 만들어서 각 탭에 적용함

import React from "react";
import styled, {
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import propTypes from "prop-types";
import { useState } from "react/cjs/react.development";

const ScrollContainer = ({
  loading,
  children,
  refreshFn,
  contentContainerStyle,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          enabled={true}
        />
      }
      style={{
        backgroundColor: "black",
      }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator size="large" color="#e84118" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: propTypes.bool,
  children: propTypes.node.isRequired,
  refreshFn: propTypes.func,
};

export default ScrollContainer;
