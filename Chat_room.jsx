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
import { Svg, Path, G, Ellipse, Polygon } from "react-native-svg";

export default function Chat_room({ navigation }) {
  return (
    <SafeAreaView style={styles.main_sav}>
      <StatusBar style="dark" backgroundColor="#2ed68a"></StatusBar>
      <View style={styles.header}>
        <View style={styles.header_div}>
          <View style={styles.img_name}>
            <TouchableOpacity style={styles.img_div}>
              <Image
                source={require("./assets/first.jpg")}
                style={styles.user_img}
              />
            </TouchableOpacity>
            <Text style={styles.name_text}>Naveen Bhai</Text>
          </View>
          <View style={styles.call_svg}>
            <TouchableOpacity>
              <Svg
                height={25}
                width={25}
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
                    d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></Path>
                  <Path
                    d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
                    fill="#000"
                  ></Path>
                </G>
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity>
              <Svg
                height={25}
                width={25}
                viewBox="0 0 48 48"
                version="1"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 48 48"
                fill="#000000"
              >
                <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                <G
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></G>
                <G id="SVGRepo_iconCarrier">
                  <Path
                    fill="#000"
                    d="M8,12h22c2.2,0,4,1.8,4,4v16c0,2.2-1.8,4-4,4H8c-2.2,0-4-1.8-4-4V16C4,13.8,5.8,12,8,12z"
                  ></Path>
                  <Polygon
                    fill="#000"
                    points="44,35 34,29 34,19 44,13"
                  ></Polygon>
                </G>
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity>
              <Svg
                height={20}
                width={20}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                class="bi bi-three-dots-vertical"
              >
                <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                <G
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></G>
                <G id="SVGRepo_iconCarrier">
                  <Path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></Path>
                </G>
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.msg_box}>
          <View style={styles.clint_msg}>
            <Text style={styles.msg_text}>Heyy, What is Your name ?</Text>
          </View>
        </View>
        <View style={styles.my_msg_box}>
          <View style={styles.my_msg}>
            <Text style={styles.msg_text}>Hellow, My name is Naveen .</Text>
          </View>
        </View>
        <View style={styles.msg_box}>
          <View style={styles.clint_msg}>
            <Text style={styles.msg_text}>And what to you do ?</Text>
          </View>
        </View>
        <View style={styles.my_msg_box}>
          <View style={styles.my_msg}>
            <Text style={styles.msg_text}>
              I study in Btech from gopeshwar .
            </Text>
          </View>
        </View>
        <View style={styles.msg_box}>
          <View style={styles.clint_msg}>
            <Text style={styles.msg_text}>Heyy, What is Your name ?</Text>
          </View>
        </View>
        <View style={styles.my_msg_box}>
          <View style={styles.my_msg}>
            <Text style={styles.msg_text}>Hellow, My name is Naveen .</Text>
          </View>
        </View>
        <View style={styles.msg_box}>
          <View style={styles.clint_msg}>
            <Text style={styles.msg_text}>And what to you do ?</Text>
          </View>
        </View>
        <View style={styles.my_msg_box}>
          <View style={styles.my_msg}>
            <Text style={styles.msg_text}>
              I study in Btech from gopeshwar .
            </Text>
          </View>
        </View>
        <View style={styles.msg_box}>
          <View style={styles.clint_msg}>
            <Text style={styles.msg_text}>Heyy, What is Your name ?</Text>
          </View>
        </View>
        <View style={styles.my_msg_box}>
          <View style={styles.my_msg}>
            <Text style={styles.msg_text}>Hellow, My name is Naveen .</Text>
          </View>
        </View>
        <View style={styles.msg_box}>
          <View style={styles.clint_msg}>
            <Text style={styles.msg_text}>And what to you do ?</Text>
          </View>
        </View>
        <View style={styles.my_msg_box}>
          <View style={styles.my_msg}>
            <Text style={styles.msg_text}>
              I study in Btech from gopeshwar .
            </Text>
          </View>
        </View>
        <View style={styles.msg_box}>
          <View style={styles.clint_msg}>
            <Text style={styles.msg_text}>Heyy, What is Your name ?</Text>
          </View>
        </View>
        <View style={styles.my_msg_box}>
          <View style={styles.my_msg}>
            <Text style={styles.msg_text}>Hellow, My name is Naveen .</Text>
          </View>
        </View>
        <View style={styles.msg_box}>
          <View style={styles.clint_msg}>
            <Text style={styles.msg_text}>And what to you do ?</Text>
          </View>
        </View>
        <View style={styles.my_msg_box}>
          <View style={styles.my_msg}>
            <Text style={styles.msg_text}>
              I study in Btech from gopeshwar .
            </Text>
          </View>
        </View>
        <View style={styles.last_gap}></View>
      </ScrollView>
      <View style={styles.bottom_div}>
        <View style={styles.bottom_inner_div}>
          <TouchableOpacity>
            <Svg
              height={25}
              width={25}
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
                  d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                  fill="#0F0F0F"
                ></Path>
                <Path
                  d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z"
                  fill="#0F0F0F"
                ></Path>
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.2 13C7.56149 13 6.9436 13.5362 7.01666 14.2938C7.06054 14.7489 7.2324 15.7884 7.95483 16.7336C8.71736 17.7313 9.99938 18.5 12 18.5C14.0006 18.5 15.2826 17.7313 16.0452 16.7336C16.7676 15.7884 16.9395 14.7489 16.9833 14.2938C17.0564 13.5362 16.4385 13 15.8 13H8.2ZM9.54387 15.5191C9.41526 15.3509 9.31663 15.1731 9.2411 15H14.7589C14.6834 15.1731 14.5847 15.3509 14.4561 15.5191C14.0981 15.9876 13.4218 16.5 12 16.5C10.5782 16.5 9.90187 15.9876 9.54387 15.5191Z"
                  fill="#0F0F0F"
                ></Path>
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                  fill="#0F0F0F"
                ></Path>
              </G>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg
              height={25}
              width={25}
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
                  d="M6.16934 6.30897C8.24667 4.23034 11.6145 4.23034 13.6918 6.30897C15.7694 8.38785 15.7694 11.7586 13.6918 13.8375L12.2612 15.2689C11.9684 15.5619 11.9686 16.0368 12.2616 16.3296C12.5545 16.6224 13.0294 16.6222 13.3222 16.3292L14.7528 14.8978C17.4157 12.2332 17.4157 7.91323 14.7528 5.24864C12.0896 2.58379 7.77154 2.58379 5.10835 5.24864L2.2472 8.11157C-0.415733 10.7762 -0.415733 15.0961 2.2472 17.7607C3.48184 18.9961 5.07401 19.6593 6.69015 19.7488C7.10372 19.7718 7.45758 19.4551 7.48051 19.0415C7.50343 18.6279 7.18674 18.2741 6.77316 18.2512C5.51156 18.1812 4.27192 17.6647 3.30819 16.7004C1.2306 14.6215 1.2306 11.2508 3.30819 9.1719L6.16934 6.30897Z"
                  fill="#000"
                ></Path>
                <Path
                  d="M17.3099 4.25115C16.8963 4.22822 16.5424 4.54491 16.5195 4.95849C16.4966 5.37207 16.8133 5.72593 17.2268 5.74885C18.4884 5.81878 19.7281 6.33528 20.6918 7.29961C22.7694 9.37849 22.7694 12.7492 20.6918 14.8281L17.8307 17.691C15.7533 19.7697 12.3855 19.7697 10.3082 17.691C8.2306 15.6122 8.2306 12.2414 10.3082 10.1626L11.7388 8.73108C12.0316 8.4381 12.0314 7.96322 11.7384 7.67042C11.4454 7.37762 10.9706 7.37777 10.6778 7.67075L9.2472 9.10222C6.58427 11.7668 6.58427 16.0868 9.2472 18.7514C11.9104 21.4162 16.2285 21.4162 18.8916 18.7514L21.7528 15.8884C24.4157 13.2238 24.4157 8.90387 21.7528 6.23928C20.5182 5.00387 18.926 4.34073 17.3099 4.25115Z"
                  fill="#000"
                ></Path>
              </G>
            </Svg>
          </TouchableOpacity>
          <TextInput
            placeholder="Type a Message"
            style={styles.msg_input}
          ></TextInput>
          <TouchableOpacity>
            <Svg
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
                  d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></Path>
              </G>
            </Svg>
          </TouchableOpacity>
        </View>
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
  header: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "#2ed68a",
  },
  header_div: {
    height: "100%",
    width: "95%",
    // backgroundColor: "red",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img_name: {
    height: "50%",
    width: "48%",
    justifyContent: "space-between",
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    // marginLeft: 15,

    // backgroundColor:"black"
  },
  img_div: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: "black",
  },
  user_img: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    //    overflow:"hidden"
  },
  name_text: {
    fontSize: 18,
    fontWeight: "400",
  },
  call_svg: {
    height: "100%",
    width: "30%",
    backgroundColor: "#2ed68a",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  bottom_div: {
    height: 60,
    width: "100%",
    backgroundColor: "#2ed68a",
    // borderTopWidth: 1,
    // borderColor: "gray",
    position: "absolute",
    bottom: 0,
    display: "flex",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom_inner_div: {
    height: "100%",
    width: "95%",
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  msg_input: {
    height: "70%",
    width: "65%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "gray",
    paddingLeft: 20,
  },
  msg_box: {
    height: 40,
    width: "95%",
    // backgroundColor: "red",
    alignSelf: "center",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  clint_msg: {
    height: "100%",
    width: "80%",
    borderRadius: 50,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#2ac47e",
    paddingLeft: 15,
  },
  msg_text: {
    fontSize: 14,
    fontWeight: "400",
  },
  my_msg_box: {
    height: 40,
    width: "95%",
    // backgroundColor: "red"
    alignSelf: "center",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 10,
  },
  my_msg: {
    height: "100%",
    width: "80%",
    borderRadius: 50,
    paddingLeft: 15,
    display: "flex",
    backgroundColor: "#001d38",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  msg_text: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
  last_gap: {
    height: 70,
    position: "relative",
    bottom: 0,
  },
});
