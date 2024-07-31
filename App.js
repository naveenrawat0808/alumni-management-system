import { StatusBar } from "expo-status-bar";
import Note1 from "./log";
import Note2 from "./home";
import Note3 from "./search";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login_page from "./Login_page";
import Chat_room from "./Chat_room";
import Chat_room2 from "./Chat_room2.1";
import Note9 from "./bloodbank";
import Note103 from "./bloodtype";
import Note10 from "./connection";
import Note104 from "./message";
import Chat_room3 from "./Chat_room2.2";
import Chat_room4 from "./Chat_room2.3";
import Chat_room5 from "./Chat_room2.4";
import Note4 from "./frofile";
import Note6 from "./profile2.1";
import Note7 from "./profile2.2";
import Note8 from "./profile2.3";
import Note60 from "./sinup";

const Stack = createNativeStackNavigator();

export default function App() {
  // return <Note60 />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login_page}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sinup"
          component={Note60}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="message"
          component={Note104}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat_room2"
          component={Chat_room2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat_room3"
          component={Chat_room3}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat_room4"
          component={Chat_room4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat_room5"
          component={Chat_room5}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="blood"
          component={Note103}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          component={Note4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile2.1"
          component={Note6}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile2.2"
          component={Note7}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile2.3"
          component={Note8}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={Note2}
          options={{
            headerShown: false,
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
