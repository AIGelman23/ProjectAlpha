import React from "react";
import { FlatList } from "react-native";
import { Text, Pressable, SafeAreaView } from "react-native";
import { Wrapper } from "../../styles/Default";
import { CardPost } from "../../components/cards/CardPost";

const Posts = [
  {
    id: "1",
    title: "Picture Title 1",
    postImg: { uri: "https://via.placeholder.com/120/0000FF" }
  },
  {
    id: "2",
    title: "Picture Title 2",
    postImg: { uri: "https://via.placeholder.com/120/EFEFEF" }
  },
  {
    id: "3",
    title: "Picture Title 3",
    postImg: { uri: "https://via.placeholder.com/120/FFFF00" }
  },
  {
    id: "4",
    title: "Picture Title 4",
    postImg: { uri: "https://via.placeholder.com/120/FF0000" }
  },
  {
    id: "5",
    title: "Picture Title 6",
    postImg: { uri: "https://via.placeholder.com/120/00FF00" }
  },
];

export const HomeScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Wrapper>
      <FlatList
        data={Posts}
        renderItem={(post) => <CardPost post={post} />}
        keyExtractor={(post) => post.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </Wrapper>
    </SafeAreaView>
  );
};
