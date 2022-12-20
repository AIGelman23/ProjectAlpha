import styled from "styled-components";

export const Wrapper = styled.SafeAreaView`
  flex: 1;

  background-color: white;
`;

export const Card = styled.View`
  background-color: #f8f8f8;
  margin-bottom: 20px;
  border-radius: 30px;
  padding: 20px;
  margin: 20px;
  shadow-opacity: 0.2;
  shadow-radius: 1px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  
`;

export const PostContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PostText = styled.Text`
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const PostImg = styled.Image`
  width: 100%; 
  height: 250px; 
  margin-top: 15px; 
`;

export const Header = styled.View`
  height: 100px;
  `;
