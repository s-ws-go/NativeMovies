import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
import { apiImage } from "../../Api";
import Poster from "../../component/Poster";
import Votes from "../../component/Votes";
import { formatdate } from "../../Utils";
import Link from "../../component/Detail/Link";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 40px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 26px;
  font-style: italic;
  margin-bottom: 10px;
`;

const Data = styled.View`
  width: 70%;
  align-items: flex-start;
  padding-left: 40px;
  padding-bottom: 40px;
  margin-top: 60px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.7;
  margin-bottom: 3px;
  font-weight: bold;
  margin-top: 20px;
`;
const DataValue = styled.Text`
  color: white;
  opacity: 0.7;
  margin-top: 5px;
`;

export default ({ openBrowser, result, loading }) => {
  return (
    <ScrollContainer
      loading={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <>
        <Header>
          <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
          <Container>
            <Poster url={result.poster} />
            <Info>
              <Title>{result.title}</Title>
              {result.votes ? <Votes votes={result.votes} /> : null}
            </Info>
          </Container>
        </Header>
        <Data>
          {result.overview ? (
            <>
              <DataName>Overview</DataName>
              <DataValue>{result.overview}</DataValue>
            </>
          ) : null}
          {loading ? (
            <ActivityIndicator color="white" style={{ marginTop: 30 }} />
          ) : null}
          {result.spoken_languages ? (
            <>
              <DataName>Languages</DataName>
              <DataValue>
                {result.spoken_languages.map((l) => `${l.name}  `)}
              </DataValue>
            </>
          ) : null}
          {result.release_date ? (
            <>
              <DataName>Release Date</DataName>
              <DataValue>{formatdate(result.release_date)}</DataValue>
            </>
          ) : null}
          {result.first_air_date ? (
            <>
              <DataName>First Air Date</DataName>
              <DataValue>{formatdate(result.first_air_date)}</DataValue>
            </>
          ) : null}
          {result.runtime ? (
            <>
              <DataName>Runtime</DataName>
              <DataValue>{result.runtime} minutes</DataValue>
            </>
          ) : null}
          {result.genres ? (
            <>
              <DataName>Genres</DataName>
              <DataValue>
                {result.genres.map((g, index) =>
                  //?????? ??? ?????? ??? ????????? ????????? ??? ????????? ?????? ?????????
                  //index??? 0?????? ??????????????? +1 ??? length ????????? ????????????.
                  index + 1 === result.genres?.length ? g.name : `${g.name}, `
                )}
              </DataValue>
            </>
          ) : null}
          {result.number_of_episodes ? (
            <>
              <DataName>Seasons / Episodes</DataName>
              <DataValue>
                {result.number_of_seasons} / {result.number_of_episodes}
              </DataValue>
            </>
          ) : null}
          {result.imdb_id ? (
            <>
              <DataName>Links</DataName>
              <Link
                text={"IMDB Page"}
                icon={"imdb"}
                onPress={() =>
                  openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
                }
              ></Link>
            </>
          ) : null}
          {/* ??????????????? ??? ?????? ??? ???????????? ????????? ????????? : ?????? ?????? ????????? */}
          {result.videos?.results?.length > 0 ? (
            <>
              <DataName>Videos</DataName>
              {result.videos.results.map((video) => (
                <Link
                  text={video.name}
                  key={video.id}
                  icon={"youtube-play"}
                  onPress={() =>
                    openBrowser(`https://www.youtube.com/watch?v=${video.key}}`)
                  }
                ></Link>
              ))}
            </>
          ) : null}
        </Data>
      </>
    </ScrollContainer>
  );
};
