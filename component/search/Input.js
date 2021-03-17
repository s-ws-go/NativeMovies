import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
// import { TextInput } from "react-native";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 20px 30px;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 18px;
  color: #e84118;
`;
// returnKeyType를 search로 주면 키보드 창에 '탐색' 버튼 추가됨(돋보기 모양)
const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    placeholder={placeholder}
    returnKeyType={"search"}
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
  />
);

Input.propTypes = {
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default Input;
