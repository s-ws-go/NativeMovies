import React, { useEffect, useLayoutEffect, useState } from "react";
import { movieApi, tvApi } from "../../Api";
import DetailPresenter from "./DetailPresenter";

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview, isTv },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({
    loading: true,
    result: { title, backgroundImage, poster, votes, overview },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        //영화일때, TV일 떄 api가 달라서 두 개로 써 준겨
        title: getDetail.original_title || getDetail.original_name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        votes: getDetail.vote_average,
        overview: getDetail.overview,
      },
    });
  };

  //중괄호 안 쳐졌을 때 async await 관련 에러 남;
  useEffect(() => {
    getData();
  }, [id]);
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);
  return <DetailPresenter {...detail} />;
};
