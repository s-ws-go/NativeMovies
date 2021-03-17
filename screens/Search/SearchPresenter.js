//Presenter 는 UI를 위한 거니까 Search Logic 은 Container component에 적용되어야 함

import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Input from "../../component/search/Input";
import HorizontalSliders from "../../component/HorizontalSliders";
import Horizontal from "../../component/Horizontal";

const Container = styled.ScrollView`
  background-color: black;
`;

const SearchPresenter = ({ movies, shows, onChange, onSubmit, keyword }) => (
  <Container>
    <Input
      placeholder={"Search For Video.."}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    <HorizontalSliders title="영화 검색결과">
      {movies.map((movie) => (
        <Horizontal></Horizontal>
      ))}
    </HorizontalSliders>
    <HorizontalSliders title="TV 검색결과">
      {shows.map((show) => (
        <Horizontal></Horizontal>
      ))}
    </HorizontalSliders>
  </Container>
);

export default SearchPresenter;
