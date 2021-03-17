import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
import { apiImage } from "../../Api";
import Poster from "../../component/Poster";
import Votes from "../../component/Votes";

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
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 10px;
`;

const Data = styled.View`
  width: 70%;
  align-items: flex-start;
  padding-left: 40px;
  margin-top: 70px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.7;
  margin-bottom: 3px;
`;
const DataValue = styled.Text`
  color: white;
  opacity: 0.7;
`;

export default ({ backgroundImage, title, votes, overview, poster }) => {
  return (
    <ScrollContainer>
      <>
        <Header>
          <BG source={{ uri: apiImage(backgroundImage, "-") }} />
          <Container>
            <Poster url={poster} />
            <Info>
              <Title>{title}</Title>
              {votes > 0 && <Votes votes={votes} />}
            </Info>
          </Container>
        </Header>
        <Data>
          {overview && (
            <>
              <DataName>Overview</DataName>
              <DataValue>{overview}</DataValue>
            </>
          )}
        </Data>
      </>
    </ScrollContainer>
  );
};
