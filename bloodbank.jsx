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

export default function Note9() {
  return (
    <SafeAreaView style={styles.main_sav}>
      <StatusBar style="dark" backgroundColor="#fff"></StatusBar>
      <View style={styles.Login_div}>
        <Image
          source={require("./aluminimage/blood2.png")}
          style={styles.Login_page}
        />
      </View>
      <TouchableOpacity style={styles.sign_button}>
        <Text style={styles.sing_text}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.create_button}>
        <Text style={styles.button_text}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.lern_more}>
        <Text style={styles.mor_time}>Learn more</Text>
        <View style={styles.skip_more}>
          <Text style={styles.skip_time}>Skip now</Text>
        </View>
      </View>
      {/* <View style={styles.lern_div}>
        <Text style={styles.more_text}>Learn more</Text>
        <TouchableOpacity>
          <Text style={styles.skip_text}>Skip now</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main_sav: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    paddingTop: Platform.OS == "ios" ? 0 : sb.currentHeight,
  },
  Login_div: {
    height: "60%",
    width: "100%",
    // backgroundColor: "red",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Login_page: {
    height: 300,
    width: 400,
    zIndex: 100,
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
    backgroundColor: "white",
  },
  sing_text: {
    color: "red",
  },
  create_button: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    color: "red",
    // elevation: 10,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  button_text: {
    color: "white",
  },
  //   lern_div: {
  //     height: 40,
  //     width: "90%",
  //     alignSelf: "center",
  //     display: "flex",
  //     // paddingTop: 10,
  //     // alignItems: "center",
  //     flexDirection: "row",
  //     gap: 90,
  //   },
  //   more_text: {
  //     height: 30,
  //     fontSize: 17,
  //     fontWeight: "500",
  //     paddingTop: 10,
  //     color: "white",
  //   },
  //   skip_text: {
  //     height: 30,
  //     fontSize: 17,
  //     fontWeight: "500",
  //     color: "white",
  //     paddingTop: 10,
  //     marginLeft: 70,
  //     // color: "blue",
  //   },
  lern_more: {
    height: "40%",
    width: "50%",
    // display: "flex",
    // alignSelf: "center",
    // flexDirection: "row",
    marginLeft: 25,
    paddingTop: 90,
  },
  mor_time: {
    height: "40%",
    width: "50%",
    // fontSize: "500",
    color: "white",
  },
  skip_more: {
    height: "40%",
    width: "50%",
    display: "flex",
    flexDirection: "row",
  },
  skip_time: {
    height: "40%",
    width: "50%",
    color: "white",
    // marginLeft: 25,

    display: "flex",
    flexDirection: "row",
    // marginLeft: 25,
    // paddingTop: 90,
  },
});
