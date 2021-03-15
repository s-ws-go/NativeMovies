// 모든 페이지에 공통으로 보이는 컴포넌트이므로 movies 폴더 밖에 만듬
import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Image } from "react-native";

const Poster = ({ url }) => <Image />;

Poster.propTypes = {
  url: propTypes.string.isRequired,
};

export default Poster;
