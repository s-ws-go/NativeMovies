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
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResult({
      movies,
      movieError,
      shows,
      showsError,
    });
  };
  console.log(result);

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
