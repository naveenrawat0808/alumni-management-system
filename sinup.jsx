import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Touchable,
  ImageBackground,
  Image,
} from "react-native";

export default function Note60({ navigation }) {
  return (
    <View>
      <View style={styles.a}>
        <Text style={styles.b}>Let's get you</Text>
        <Text style={styles.b}>Started</Text>
      </View>
      <View style={{ display: "flex", width: "90%", justifyContent: "center" }}>
        <Text style={styles.na}>first name*</Text>
      </View>
      <View style={styles.nav}>
        <TextInput style={styles.name}>Enter your first name</TextInput>
      </View>
      <View>
        <Text style={styles.na}>surname*</Text>
      </View>
      <View style={styles.nav}>
        <TextInput style={styles.name}>Enter your surname</TextInput>
      </View>
      <View>
        <Text style={styles.na}>Email address*</Text>
      </View>
      <View style={styles.nav}>
        <TextInput style={styles.name}>Enter your email address</TextInput>
      </View>
      <View>
        <Text style={styles.na}>password*</Text>
      </View>
      <View style={styles.nav}>
        <TextInput style={styles.name}>Enter your password</TextInput>
      </View>
      <View>
        <Text style={styles.c}>
          Password should be 8 characters with upper case & lower case
          letters,numbers & special characters
        </Text>
      </View>
      <TouchableOpacity
        style={styles.e}
        onPress={() => {
          navigation.navigate("chatroom");
        }}
      >
        <Text style={styles.f}>sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  a: {
    height: 100,
    width: "90%",
    display: "flex",
    alignSelf: "center",
    alignItems: "left",
    justifyContent: "flex-end",
  },
  c: {
    height: 50,
    alignSelf: "center",
    color: "gray",
    marginTop: 10,
    width: "80%",
    marginBottom: 13,
    fontWeight: "",
  },
  b: {
    fontWeight: "500",
    color: "black",
    fontSize: 20,
  },
  na: {
    marginLeft: 38,
    marginTop: 20,
    color: "gray",
    fontWeight: "600",
  },
  name: {
    height: 50,
    width: "80%",
    display: "flex",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "200",
    backgroundColor: "lightgray",
    elevation: 4,
    paddingLeft: 10,
    borderRadius: 3,
  },
  f: {
    fontWeight: "600",
    color: "white",
  },
  // nav: {
  //   borderBottomWidth: 1,
  //   width: "85%",
  //   alignSelf: "center",
  //   backgroundColor: "white",
  //   elevation: 2,
  // },
  e: {
    height: 50,
    width: "80%",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    backgroundColor: "green",
  },
});
