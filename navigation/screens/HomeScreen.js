import React, {useContext} from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { SafeAreaView } from "../../styles/GlobalStyle";
import { CardPost } from "../../components/cards/CardPost";

const Posts = [
  {
    id: "1",
    title: "Picture Title 1",
    postImg: { uri: "https://placedog.net/640/480?random" },
  },
  {
    id: "2",
    title: "Picture Title 2",
    postImg: { uri: "https://placedog.net/640/480?random" },
  },
  {
    id: "3",
    title: "Picture Title 3",
    postImg: { uri: "https://placedog.net/640/480?random" },
  },
  {
    id: "4",
    title: "Picture Title 4",
    postImg: { uri: "https://placedog.net/640/480?random" },
  },
  {
    id: "5",
    title: "Picture Title 6",
    postImg: { uri: "https://placedog.net/640/480?random" },
  },
];



export const HomeScreen = ({ route, navigation }) => {

  const {logout} = useContext(AuthContext);

  return (
    <SafeAreaView>
    <TouchableOpacity onPress={() => {logout()}}><Text>LOG OUT</Text></TouchableOpacity>
      <FlatList
        data={Posts}
        renderItem={(post) => <CardPost post={post} />}
        keyExtractor={(post) => post.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
