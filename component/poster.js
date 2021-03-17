// 모든 페이지에 공통으로 보이는 컴포넌트이므로 movies 폴더 밖에 만듬
import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { apiImage } from "../Api";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 20px;
`;

const Poster = ({ url }) => <Image source={{ uri: apiImage(url) }} />;

Poster.propTypes = {
  url: propTypes.string,
};

export default Poster;
