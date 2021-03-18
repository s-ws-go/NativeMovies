//Presenter 는 UI를 위한 거니까 Search Logic 은 Container component에 적용되어야 함

import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Input from "../../component/search/Input";
import HorizontalSliders from "../../component/HorizontalSliders";
import Vertical from "../../component/Vertical";
import ScrollContainer from "../../component/ScrollContainer";

const SearchPresenter = ({
  movies,
  shows,
  onChange,
  onSubmit,
  keyword,
  isTv,
}) => (
  //onSubmit 시 keyword가 비어 있을 때 새로고침하면 에러가 남. 이거 고치는 작업 컨테이너에서 함
  <ScrollContainer loading={false} refreshFn={onSubmit}>
    <Input
      placeholder={"Search For Video.."}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSliders title="영화 검색결과">
        {movies.map((movie) => (
          <Vertical
            isTv={false}
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.original_title}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSliders>
    )}
    {shows.length !== 0 && (
      <HorizontalSliders title="TV 검색결과">
        {shows.map((show) => (
          <Vertical
            isTv={true}
            key={show.id}
            id={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSliders>
    )}
  </ScrollContainer>
);

export default SearchPresenter;
