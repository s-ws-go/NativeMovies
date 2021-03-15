import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { movieApi } from "../../Api.js";
import MoviesPresenter from "./MoviesPresenter";

export default () => {
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upcoming,
      upcomingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <MoviesPresenter {...movies} />;
};
