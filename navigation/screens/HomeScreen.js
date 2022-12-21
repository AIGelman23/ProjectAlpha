import React, { useCallback} from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "../../styles/GlobalStyle";
import { CardPost } from "../../components/cards/CardPost";
import { useFonts } from "expo-font";

const Posts = [
  {
    id: "1",
    title: "Picture Title 1",
    postImg: { uri: "https://via.placeholder.com/120/0000FF" },
  },
  {
    id: "2",
    title: "Picture Title 2",
    postImg: { uri: "https://via.placeholder.com/120/EFEFEF" },
  },
  {
    id: "3",
    title: "Picture Title 3",
    postImg: { uri: "https://via.placeholder.com/120/FFFF00" },
  },
  {
    id: "4",
    title: "Picture Title 4",
    postImg: { uri: "https://via.placeholder.com/120/FF0000" },
  },
  {
    id: "5",
    title: "Picture Title 6",
    postImg: { uri: "https://via.placeholder.com/120/00FF00" },
  },
];

export const HomeScreen = ({ route, navigation }) => {

  const [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  });

  useCallback(async () => {
    if (fontsLoaded) {
      console.log('fontsLoaded:');
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
     {/* <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>Inter Black</Text> */}
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
