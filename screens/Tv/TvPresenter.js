import React from "react";
import styled from "styled-components/native";
import Vertical from "../../component/Vertical";
import ScrollContainer from "../../component/ScrollContainer";
import HorizontalSliders from "../../component/HorizontalSliders";
import ListSliders from "../../component/ListSliders";
import Horizontal from "../../component/Horizontal";

const Container = styled.View``;

export default ({
  loading,
  today,
  thisWeek,
  topRated,
  popular,
  refreshFn,
  isTv,
}) => {
  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
      <Container>
        <HorizontalSliders title="인기 채널">
          {popular.map((show) => (
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
        <HorizontalSliders title="Top Rated">
          {topRated.map((show) => (
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
        <HorizontalSliders title="This Week Shows">
          {thisWeek.map((show) => (
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
        <ListSliders title="Airing Today">
          {today.map((show) => (
            <Horizontal
              isTv={true}
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_name}
              firstair={show.first_air_date}
              overview={show.overview}
            />
          ))}
        </ListSliders>
      </Container>
    </ScrollContainer>
  );
};
