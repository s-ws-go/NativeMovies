import React, { useEffect, useLayoutEffect, useState } from "react";
import { movieApi } from "../../Api";
import DetailPresenter from "./DetailPresenter";

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [movie, setMovie] = useState({
    title,
    backgroundImage,
    poster,
    votes,
    overview,
  });
  const getData = async () => {
    const [getMovie, getMovieError] = await movieApi.movie(id);
    setMovie({
      ...getMovie,
      title: getMovie.original_title,
      backgroundImage: getMovie.backdrop_path,
      poster: getMovie.poster_path,
      votes: getMovie.vote_average,
      overview: getMovie.overview,
    });
  };
  useEffect(() => {
    getData();
  }, [id]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);
  return <DetailPresenter {...movie} />;
};
