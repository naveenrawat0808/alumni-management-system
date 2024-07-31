import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar as sb,
  Platform,
  TextInput,
  ScrollView,
} from "react-native";

export default function Note103({ navigation }) {
  return (
    <SafeAreaView style={styles.main_sav}>
      {/* <StatusBar style="dark" backgroundColor="#fff"></StatusBar> */}
      <View style={styles.Login_div}>
        <Image
          source={require("./aluminimage/blood2.png")}
          style={styles.Login_page}
        />
      </View>
      <Text style={styles.content}>Please Pick Your Blood type</Text>
      <Text style={styles.discription}>Don't know about your blood type ?</Text>
      <View style={styles.buttons_div}>
        <TouchableOpacity style={styles.a_button}>
          <Text style={styles.a_text}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.b_button}>
          <Text style={styles.b_text}>B</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons_div}>
        <TouchableOpacity style={styles.a_button}>
          <Text style={styles.a_text}>O</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.a_button}>
          <Text style={styles.a_text}>AB</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.p_n_div}>
        <TouchableOpacity style={styles.p_button}>
          <Text style={styles.p_text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.n_button}>
          <Text style={styles.n_text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.finish}>
        <Text style={styles.finsish_hai}>
          i want to receive notification about blood duration
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.sign_button}>
          <Text style={styles.sing_text}>Finish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_sav: {
    display: "flex",
    flexDirection: "column",
    height: "80%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: Platform.OS == "ios" ? 0 : sb.currentHeight,
  },
  Login_div: {
    height: "35%",
    width: "100%",
    // backgroundColor: "red",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Login_page: {
    height: 100,
    width: 100,
    // zIndex: 100,
  },
  content: {
    width: "70%",
    fontSize: 30,
    fontWeight: "300",
    alignSelf: "center",
    textAlign: "center",
    letterSpacing: 0.7,
  },
  discription: {
    width: "80%",
    fontSize: 16,
    fontWeight: "300",
    alignSelf: "center",
    textAlign: "center",
    letterSpacing: 0.7,
    color: "red",
    marginTop: 20,
  },
  buttons_div: {
    height: 70,
    width: "80%",
    alignSelf: "center",
    // backgroundColor: "red",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  a_button: {
    height: "100%",
    width: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "gray",
  },
  b_button: {
    height: "100%",
    width: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "red",
    borderRadius: 5,
  },
  a_text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  b_text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
  p_n_div: {
    height: 70,
    width: "60%",
    alignSelf: "center",
    // backgroundColor: "red",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  p_button: {
    height: "100%",
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "red",
  },
  p_text: {
    fontSize: 26,
    fontWeight: "400",
    color: "#fff",
  },
  n_button: {
    height: "100%",
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "gray",
  },
  n_text: {
    fontSize: 26,
    fontWeight: "400",
    color: "#000",
  },
  finsish_hai: {
    width: "80%",
    fontSize: 16,
    fontWeight: "300",
    // alignSelf: "center",
    // textAlign: "center",
    letterSpacing: 0.7,
    marginLeft: 30,
    color: "red",
    marginTop: 20,
  },
  sign_button: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    // borderWidth: 1,
    // borderColor: "#797171",
    borderRadius: 5,
    color: "red",
    elevation: 10,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  sing_text: {
    color: "white",
  },
});
