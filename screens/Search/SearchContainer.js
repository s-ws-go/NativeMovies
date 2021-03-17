import React, { useState } from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../Api";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState({
    movies: [],
    movieError: null,
    shows: [],
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    //ketword가 비어있는 상태에서 새로고침 하면 onsubmit 발생 __ 빈 값이라 에러 발생하는 것 막기 위한 if문
    if (keyword === "") {
      return;
    }
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResult({
      movies,
      movieError,
      shows,
      showsError,
    });
  };

  return (
    <>
      <SearchPresenter
        {...result}
        onChange={onChange}
        onSubmit={search}
        keyword={keyword}
      />
    </>
  );
};

export default SearchContainer;
