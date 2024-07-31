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
import { Svg, Path, G, Ellipse } from "react-native-svg";
import axios from "axios";
import { useState } from "react";

export default function Login_page({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const send = () => {
    axios
      .get(
        "http://192.168.66.83:3000/profile?email=" + email + "&password=" + pass
      )
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={styles.main_sav}>
      <StatusBar style="dark" backgroundColor="#fff"></StatusBar>
      <View style={styles.Login_vector_div}>
        <Image
          source={require("./assets/first.jpg")}
          style={styles.Login_vector}
        />
      </View>
      <Text style={styles.login_text}>Login</Text>
      <View style={styles.signup_div}>
        <Text style={styles.signup_text}>Don't have any acoount yet ?</Text>
        <TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("sinup");
            }}
          >
            <Text style={styles.up_text}>Sign up</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.input_div}>
        <TextInput
          style={styles.email_text}
          placeholder="Enter email address"
          onChangeText={(text) => {
            setEmail(text);
          }}
        ></TextInput>
        <View style={styles.text_svg}>
          <Svg
            height={30}
            width={30}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
            <G
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></G>
            <G id="SVGRepo_iconCarrier">
              <Path
                d="M15.5 11.5H15.51M11.5 11.5H11.51M7.5 11.5H7.51M15.3 19.1L21 21L19.1 15.3C19.1 15.3 20 14 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C14.0847 20 15.3 19.1 15.3 19.1Z"
                stroke="#797171"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></Path>
            </G>
          </Svg>
        </View>
      </View>
      <View style={styles.input_second_div}>
        <TextInput
          style={styles.email_text}
          placeholder="Enter your password"
          onChangeText={(text) => {
            setPass(text);
          }}
        ></TextInput>
        <View style={styles.text_svg}>
          <Svg
            height={30}
            width={30}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
            <G
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></G>
            <G id="SVGRepo_iconCarrier">
              <Path
                d="M15.5 11.5H15.51M11.5 11.5H11.51M7.5 11.5H7.51M15.3 19.1L21 21L19.1 15.3C19.1 15.3 20 14 20 11.5C20 6.80558 16.1944 3 11.5 3C6.80558 3 3 6.80558 3 11.5C3 16.1944 6.80558 20 11.5 20C14.0847 20 15.3 19.1 15.3 19.1Z"
                stroke="#797171"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></Path>
            </G>
          </Svg>
        </View>
      </View>
      <TouchableOpacity
        style={styles.login_button}
        onPress={() => {
          send();
          navigation.navigate("home");
        }}
      >
        <Text style={styles.button_text}>Login</Text>
      </TouchableOpacity>
      <View style={styles.login_svgs}>
        <TouchableOpacity>
          <Svg
            height={30}
            width={30}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
            <G
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></G>
            <G id="SVGRepo_iconCarrier">
              <Path
                fill="#4285F4"
                d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
              ></Path>
              <Path
                fill="#34A853"
                d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
              ></Path>
              <Path
                fill="#FBBC04"
                d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
              ></Path>
              <Path
                fill="#EA4335"
                d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
              ></Path>
            </G>
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity>
          <Svg
            height={35}
            width={35}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
            <G
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></G>
            <G id="SVGRepo_iconCarrier">
              <Path
                fill="#0A66C2"
                d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
              ></Path>
            </G>
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity>
          <Svg
            height={30}
            width={30}
            viewBox="0 -3 256 256"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            fill="#000000"
          >
            <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
            <G
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></G>
            <G id="SVGRepo_iconCarrier">
              <G>
                <Path
                  d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
                  fill="#161614"
                ></Path>
              </G>
            </G>
          </Svg>
        </TouchableOpacity>
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
  Login_vector_div: {
    height: "45%",
    width: "90%",
    // backgroundColor: "red",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Login_vector: {
    height: 300,
    width: 400,
    zIndex: 100,
  },
  login_text: {
    height: 40,
    width: "90%",
    alignSelf: "center",
    fontSize: 26,
    fontWeight: "700",
    color: "#797171",
    // backgroundColor:"gray"
  },
  signup_div: {
    height: 30,
    width: "90%",
    alignSelf: "center",
    display: "flex",
    // alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  signup_text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#797171",
  },
  up_text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#797171",
    color: "blue",
  },
  input_div: {
    height: 60,
    width: "90%",
    // backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#797171",
  },
  input_second_div: {
    height: 60,
    width: "90%",
    // backgroundColor: "red",
    alignSelf: "center",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#797171",
    marginTop: 20,
  },
  email_text: {
    height: "100%",
    width: "50%",
    marginLeft: 20,
    // backgroundColor:"#000"
  },
  text_svg: {
    height: "100%",
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:"#000",
  },
  login_button: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#797171",
    borderRadius: 5,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  button_text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  login_svgs: {
    height: 50,
    width: "90%",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
