import React from "react";
import { SafeAreaView } from "react-native";
import { Card, PostContainer, PostImg, PostText } from "../../styles/Default";

export const CardPost = ({ post }) => {
  console.log(JSON.stringify(post));
  const { title, postImg } = post.item;
  return (
    <Card>
      <PostContainer>
        <PostText>{title}</PostText>
        <PostImg source={postImg} />
      </PostContainer>
    </Card>
  );
};
