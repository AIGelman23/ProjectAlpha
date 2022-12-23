import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Card = styled.View`
  background-color: #f8f8f8;
  border-radius: 35px;
  padding: 20px;
  margin: 20px;
  shadow-opacity: 0.3;
  shadow-radius: 1px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
`;

export const PostContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PostText = styled.Text`
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'OpenSans-Regular';
  font-size: 14px;
`;

export const PostImg = styled.Image`
  width: 100%;
  height: 250px;
  margin-top: 15px;
`;

export const Header = styled.View`
  height: 100px;
`;
