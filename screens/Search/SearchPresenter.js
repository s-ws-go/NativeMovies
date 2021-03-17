import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import Input from "../../component/search/Input";

const Container = styled.ScrollView`
  background-color: black;
`;

const Text = styled.Text`
  color: white;
`;

const SearchPresenter = () => (
  <Container>
    <Input placeholder="Search For Video.." />
  </Container>
);

export default SearchPresenter;
