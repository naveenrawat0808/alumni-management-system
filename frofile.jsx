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
  Platform,
  SafeAreaView,
  Pressable,
  StatusBar as sb,
  ScrollView,
} from "react-native";
export default function Note4({ Navigation }) {
  return (
    <SafeAreaView style={styles.main_sav}>
      <StatusBar style="dark" backgroundColor="lightgray"></StatusBar>
      <View style={styles.rawat}>
        <View style={styles.view_point}>
          <View style={styles.cover}>
            <Image
              source={require("./aluminimage/grup.jpg")}
              style={styles.grup}
            />
            <Text style={styles.content}>
              Arjun Negi<Text style={styles.her}>(he\him)</Text>
            </Text>
            <Text style={styles.para}>
              WEB DEVELOPER ||APP DEVELOPER|| CSE'2024 || INSTITUTE OF
              TECHNOLOGY GOPESHWAR
            </Text>
            <Text style={styles.based}>ALMORA,UTTARAKHAND,INDIA</Text>
            <Text style={styles.numbr}>2500+ Connections</Text>
            <TouchableOpacity style={styles.connect}>
              <Text style={styles.cover_content}>message</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.suggt}>
          <Text style={styles.yoyo}>Suggested for you</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main_sav: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: Platform.OS == "ios" ? 0 : sb.currentHeight,
  },
  rawat: {
    display: "flex",
    flexDirection: "row",
    maxHeight: "100%",
  },
  view_point: {
    height: "300%",
    width: "100%",
    // marginRight: 5,
    backgroundColor: "lightgray",
    borderRadius: 15,
    // display: "flex",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  cover: {
    height: 110,
    width: "100%",
    // borderRadius: 15,
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,

    marginBottom: 169,
    backgroundColor: "lightblue",
  },
  grup: {
    height: 95,
    width: 95,
    // backgroundColor: "red",
    borderRadius: 400,
    marginLeft: 23,
    marginTop: 55,
  },
  content: {
    color: "black",
    height: 35,
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 10,
    marginLeft: 10,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    // backgroundColor: "green",
  },
  her: {
    color: "black",
    height: 10,
    width: "100%",
    fontSize: 10,
    marginLeft: 10,
  },
  para: {
    height: 40,
    width: "79%",
    marginLeft: 5,
    paddingTop: 5,
    display: "flex",

    textAlign: "center",
  },
  based: {
    height: 20,
    width: "100%",
    marginTop: 5,
    marginLeft: 10,
    // display: "flex",
    // textAlign: "center",
  },
  numbr: {
    height: 20,
    width: "100%",
    color: "blue",
    marginTop: 5,
    fontWeight: "500",
    marginLeft: 10,
  },
  connect: {
    height: 35,
    width: "90%",
    backgroundColor: "blue",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 200,
    // borderWidth: 2,
    // borderColor: "black",
    marginTop: 10,
    marginLeft: 15,
  },
  cover_content: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    color: "white",
    textAlign: "center",
    lineHeight: 30,
  },
  // suggt: {
  //   height: "50%",
  //   width: "40",
  //   backgroundColor: "red",
  // },
  // yoyo: {
  //   height: 50,
  //   width: "100%",
  //   paddingTop: 10,
  //   // backgroundColor: "red",
  //   marginTop: 20,
  // },
});
