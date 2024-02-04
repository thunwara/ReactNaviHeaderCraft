// Home.js

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("NextScreen")}>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "red" }}>
          move to the Next Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
