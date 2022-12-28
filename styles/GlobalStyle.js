import styled from "styled-components/native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ViewWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
  font-family: "OpenSans-Regular";
  font-size: 14px;
`;

export const PostImg = styled.Image`
  width: 100%;
  height: 250px;
  margin-top: 15px;
`;

export const TextInput = styled.TextInput`
backgroundColor: #fff;
`;

export const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: center;;
  margin-horizontal: 40px;
  margin-vertical: 10px;
  padding-horizontal: 30px;
  border: 1px solid #ccc;
  height: 45px;
  border-radius: 65px;
  background-color: #fff;
`;

export const FieldButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const FieldLabel = styled.Text`
  color: blue; 
  font-weight: 700;
`;

export const AuthButton = styled.TouchableOpacity`
  backgroundColor: blue;
  padding: 15px;
  border-radius: 20px;
  margin-bottom: 25px;
`;

export const AuthButtonLabel = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;

