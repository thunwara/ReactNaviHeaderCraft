// App.js

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./src/Home";
import NextScreen from "./src/NextScreen";
import Header from "./src/Header";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Header name="Home" />,
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={28}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000000",
              elevation: 25,
            },
          }}
        />
        <Stack.Screen
          name="NextScreen"
          component={NextScreen}
          options={{
            headerTitle: () => <Header name="NextScreen" />,
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={28}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#00e4d0",
              shadowColor: "#000000",
              elevation: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default () => {
//   return (
//     <NavigationContainer>
//       <App />
//     </NavigationContainer>
//   );
// };

export default App;
