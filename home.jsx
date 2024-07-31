import { StatusBar } from "expo-status-bar";
import Note3 from "./search";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Touchable,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar as sb,
  ScrollView,
} from "react-native";
import { Svg, Path, G, Rect, ClipPath, Defs } from "react-native-svg";

export default function Note2({ navigation }) {
  return (
    <SafeAreaView style={styles.sav}>
      <Note3 navigation={navigation} />
      <View style={styles.o_sv}>
        <ScrollView>
          <View style={styles.ho_me}>
            <View style={styles.im_age}>
              <TouchableOpacity style={styles.in_dia}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("profile");
                  }}
                >
                  <Image
                    source={require("./aluminimage/arjun.jpg")}
                    style={styles.new_s}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity style={styles.ar_jun}>
                <Text style={styles.na_me}>Arjun Negi</Text>
                <Text style={styles.na_bb}>full stack web developer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.foll_wo}>
                <Text style={styles.fll_bak}>+Follow</Text>
                <Text style={styles.fll_wig}>...</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.con_tnt}>
            <Text style={styles.wri_te}>
              Creating ins't required,but linking back is appreciated and allows
              image authous to gain exposure. You can use the follwing text:
            </Text>

            <View style={styles.tab_le}>
              <Image
                source={require("./aluminimage/leader.jpeg")}
                style={styles.ne_img}
              />
            </View>
            <View style={[styles.ic_on, styles.mt]}>
              <Svg
                style={styles.sv_g}
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
                    opacity="0.4"
                    d="M21.6509 10.03C21.2609 9.46997 20.5709 9.14997 19.7809 9.14997H15.6809C15.4109 9.14997 15.1609 9.03998 14.9909 8.83998C14.8109 8.63998 14.7409 8.35997 14.7809 8.06997L15.2909 4.78997C15.5109 3.80997 14.8609 2.70998 13.8809 2.37998C12.9709 2.03998 11.9009 2.49998 11.4709 3.14998L7.25086 9.41998L7.13086 9.61998V18.46L7.28086 18.61L10.4509 21.06C10.8709 21.48 11.8209 21.71 12.4909 21.71H16.3909C17.7309 21.71 19.0809 20.7 19.3809 19.47L21.8409 11.98C22.1009 11.27 22.0309 10.58 21.6509 10.03Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.com_nt}
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
                  <G id="style=bulk">
                    <G id="comment">
                      <Path
                        id="vector (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.23621 11.1034C1.23621 5.36133 6.07454 0.763672 11.9862 0.763671C14.2426 0.763671 16.3321 1.4227 18.073 2.58609C20.8865 4.4319 22.7362 7.55126 22.7362 11.1034C22.7362 14.2061 21.3193 16.9815 19.0724 18.8609C19.1676 18.9782 19.2691 19.1076 19.371 19.2448C19.5794 19.5251 19.8007 19.8529 19.9732 20.1857C20.1354 20.4987 20.3019 20.9046 20.3019 21.3173C20.3019 22.0126 19.8872 22.5507 19.4096 22.8608C18.9306 23.1718 18.303 23.3178 17.6892 23.1894C16.4767 22.9358 14.9799 22.4797 13.8035 22.0941C13.2115 21.9001 12.6936 21.7216 12.3236 21.5916C12.1385 21.5265 11.9902 21.4735 11.8878 21.4367L11.8522 21.4238C8.48271 21.3843 5.46883 19.8566 3.55066 17.4735C2.10188 15.7237 1.23621 13.5057 1.23621 11.1034Z"
                        fill="skyblue"
                      ></Path>
                      <Path
                        id="vector (Stroke)_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3377 5.76872C17.6953 5.55961 18.1546 5.67997 18.3637 6.03753C19.238 7.53261 19.7362 9.26182 19.7362 11.1037C19.7362 12.9412 19.2385 14.6675 18.3633 16.1604C18.1538 16.5178 17.6943 16.6376 17.337 16.4281C16.9797 16.2187 16.8598 15.7592 17.0693 15.4018C17.8138 14.1319 18.2362 12.6664 18.2362 11.1037C18.2362 9.53624 17.8131 8.06734 17.0689 6.79475C16.8598 6.43719 16.9801 5.97782 17.3377 5.76872Z"
                        fill="skyblue"
                      ></Path>
                    </G>
                  </G>
                </G>
              </Svg>
              <Svg
                style={styles.req_uest}
                fill="skyblue"
                viewBox="0 0 24 24"
                id="repost-round"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon flat-color"
              >
                <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                <G
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></G>
                <G id="SVGRepo_iconCarrier">
                  <Path
                    id="secondary"
                    d="M20.71,11.29l-2-2a1,1,0,0,0-1.42,0l-2,2a1,1,0,0,0,1.42,1.42l.29-.3V15a5,5,0,0,1-9.07,2.89A1,1,0,1,0,6.29,19,7,7,0,0,0,12,22a7,7,0,0,0,7-7V12.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,11.29Z"
                    style="fill: skyblue;"
                  ></Path>
                  <Path
                    id="primary"
                    d="M17.71,5A7,7,0,0,0,12,2,7,7,0,0,0,5,9v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42l-.29.3V9a5,5,0,0,1,9.07-2.89A1,1,0,0,0,17.71,5Z"
                    style="fill: skyblue;"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.se_nd}
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
                    opacity="0.4"
                    d="M7.11039 5.96003L16.1304 2.95003C20.1804 1.60003 22.3804 3.81003 21.0404 7.86003L18.0304 16.88C16.0104 22.95 12.6904 22.95 10.6704 16.88L9.78039 14.2L7.10039 13.31C1.04039 11.3 1.04039 7.99003 7.11039 5.96003Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1191 11.6301L15.9291 7.81006L12.1191 11.6301Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
            </View>
            <View style={styles.ic_on}>
              <View>
                <Text>Like</Text>
              </View>
              <View>
                <Text>Comment</Text>
              </View>
              <View>
                <Text>Repost</Text>
              </View>
              <View>
                <Text>Send</Text>
              </View>
            </View>
          </View>

          <View style={styles.ho_me}>
            <View style={styles.im_age}>
              <TouchableOpacity style={styles.in_dia}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("profile2.1");
                  }}
                >
                  <Image
                    source={require("./aluminimage/naveen.jpg")}
                    style={styles.new_s}
                  />
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={styles.ar_jun}>
                <Text style={styles.na_me}>Naveen Rawat</Text>
                <Text style={styles.na_bb}>App Developer</Text>
              </View>
              <TouchableOpacity style={styles.foll_wo}>
                <Text style={styles.fll_bak}>+Follow</Text>
                <Text style={styles.fll_wig}>...</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.con_tnt}>
            <Text style={styles.wri_te}>
              Creating ins't required,but linking back is appreciated and allows
              image authous to gain exposure. You can use the follwing text:
            </Text>

            <View style={styles.tab_le}>
              <Image
                source={require("./aluminimage/program.jpeg")}
                style={styles.ne_img}
              />
            </View>
            <View style={[styles.ic_on, styles.mt]}>
              <Svg
                style={styles.sv_g}
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
                    opacity="0.4"
                    d="M21.6509 10.03C21.2609 9.46997 20.5709 9.14997 19.7809 9.14997H15.6809C15.4109 9.14997 15.1609 9.03998 14.9909 8.83998C14.8109 8.63998 14.7409 8.35997 14.7809 8.06997L15.2909 4.78997C15.5109 3.80997 14.8609 2.70998 13.8809 2.37998C12.9709 2.03998 11.9009 2.49998 11.4709 3.14998L7.25086 9.41998L7.13086 9.61998V18.46L7.28086 18.61L10.4509 21.06C10.8709 21.48 11.8209 21.71 12.4909 21.71H16.3909C17.7309 21.71 19.0809 20.7 19.3809 19.47L21.8409 11.98C22.1009 11.27 22.0309 10.58 21.6509 10.03Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.com_nt}
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
                  <G id="style=bulk">
                    <G id="comment">
                      <Path
                        id="vector (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.23621 11.1034C1.23621 5.36133 6.07454 0.763672 11.9862 0.763671C14.2426 0.763671 16.3321 1.4227 18.073 2.58609C20.8865 4.4319 22.7362 7.55126 22.7362 11.1034C22.7362 14.2061 21.3193 16.9815 19.0724 18.8609C19.1676 18.9782 19.2691 19.1076 19.371 19.2448C19.5794 19.5251 19.8007 19.8529 19.9732 20.1857C20.1354 20.4987 20.3019 20.9046 20.3019 21.3173C20.3019 22.0126 19.8872 22.5507 19.4096 22.8608C18.9306 23.1718 18.303 23.3178 17.6892 23.1894C16.4767 22.9358 14.9799 22.4797 13.8035 22.0941C13.2115 21.9001 12.6936 21.7216 12.3236 21.5916C12.1385 21.5265 11.9902 21.4735 11.8878 21.4367L11.8522 21.4238C8.48271 21.3843 5.46883 19.8566 3.55066 17.4735C2.10188 15.7237 1.23621 13.5057 1.23621 11.1034Z"
                        fill="skyblue"
                      ></Path>
                      <Path
                        id="vector (Stroke)_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3377 5.76872C17.6953 5.55961 18.1546 5.67997 18.3637 6.03753C19.238 7.53261 19.7362 9.26182 19.7362 11.1037C19.7362 12.9412 19.2385 14.6675 18.3633 16.1604C18.1538 16.5178 17.6943 16.6376 17.337 16.4281C16.9797 16.2187 16.8598 15.7592 17.0693 15.4018C17.8138 14.1319 18.2362 12.6664 18.2362 11.1037C18.2362 9.53624 17.8131 8.06734 17.0689 6.79475C16.8598 6.43719 16.9801 5.97782 17.3377 5.76872Z"
                        fill="skyblue"
                      ></Path>
                    </G>
                  </G>
                </G>
              </Svg>
              <Svg
                style={styles.req_uest}
                fill="skyblue"
                viewBox="0 0 24 24"
                id="repost-round"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon flat-color"
              >
                <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                <G
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></G>
                <G id="SVGRepo_iconCarrier">
                  <Path
                    id="secondary"
                    d="M20.71,11.29l-2-2a1,1,0,0,0-1.42,0l-2,2a1,1,0,0,0,1.42,1.42l.29-.3V15a5,5,0,0,1-9.07,2.89A1,1,0,1,0,6.29,19,7,7,0,0,0,12,22a7,7,0,0,0,7-7V12.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,11.29Z"
                    style="fill: skyblue;"
                  ></Path>
                  <Path
                    id="primary"
                    d="M17.71,5A7,7,0,0,0,12,2,7,7,0,0,0,5,9v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42l-.29.3V9a5,5,0,0,1,9.07-2.89A1,1,0,0,0,17.71,5Z"
                    style="fill: skyblue;"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.se_nd}
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
                    opacity="0.4"
                    d="M7.11039 5.96003L16.1304 2.95003C20.1804 1.60003 22.3804 3.81003 21.0404 7.86003L18.0304 16.88C16.0104 22.95 12.6904 22.95 10.6704 16.88L9.78039 14.2L7.10039 13.31C1.04039 11.3 1.04039 7.99003 7.11039 5.96003Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1191 11.6301L15.9291 7.81006L12.1191 11.6301Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
            </View>
            <View style={styles.ic_on}>
              <View>
                <Text>Like</Text>
              </View>
              <View>
                <Text>Comment</Text>
              </View>
              <View>
                <Text>Repost</Text>
              </View>
              <View>
                <Text>Send</Text>
              </View>
            </View>
          </View>

          <View style={styles.ho_me}>
            <View style={styles.im_age}>
              <View style={styles.in_dia}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("profile2.2");
                  }}
                >
                  <Image
                    source={require("./aluminimage/neeru.jpg")}
                    style={styles.new_s}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.ar_jun}>
                <Text style={styles.na_me}>Neeraj Bisht</Text>
                <Text style={styles.na_bb}>Backend developer</Text>
              </View>
              <TouchableOpacity style={styles.foll_wo}>
                <Text style={styles.fll_bak}>+Follow</Text>
                <Text style={styles.fll_wig}>...</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.con_tnt}>
            <Text style={styles.wri_te}>
              Creating ins't required,but linking back is appreciated and allows
              image authous to gain exposure. You can use the follwing text:
            </Text>

            <View style={styles.tab_le}>
              <Image
                source={require("./aluminimage/back.jpeg")}
                style={styles.ne_img}
              />
            </View>
            <View style={[styles.ic_on, styles.mt]}>
              <Svg
                style={styles.sv_g}
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
                    opacity="0.4"
                    d="M21.6509 10.03C21.2609 9.46997 20.5709 9.14997 19.7809 9.14997H15.6809C15.4109 9.14997 15.1609 9.03998 14.9909 8.83998C14.8109 8.63998 14.7409 8.35997 14.7809 8.06997L15.2909 4.78997C15.5109 3.80997 14.8609 2.70998 13.8809 2.37998C12.9709 2.03998 11.9009 2.49998 11.4709 3.14998L7.25086 9.41998L7.13086 9.61998V18.46L7.28086 18.61L10.4509 21.06C10.8709 21.48 11.8209 21.71 12.4909 21.71H16.3909C17.7309 21.71 19.0809 20.7 19.3809 19.47L21.8409 11.98C22.1009 11.27 22.0309 10.58 21.6509 10.03Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.com_nt}
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
                  <G id="style=bulk">
                    <G id="comment">
                      <Path
                        id="vector (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.23621 11.1034C1.23621 5.36133 6.07454 0.763672 11.9862 0.763671C14.2426 0.763671 16.3321 1.4227 18.073 2.58609C20.8865 4.4319 22.7362 7.55126 22.7362 11.1034C22.7362 14.2061 21.3193 16.9815 19.0724 18.8609C19.1676 18.9782 19.2691 19.1076 19.371 19.2448C19.5794 19.5251 19.8007 19.8529 19.9732 20.1857C20.1354 20.4987 20.3019 20.9046 20.3019 21.3173C20.3019 22.0126 19.8872 22.5507 19.4096 22.8608C18.9306 23.1718 18.303 23.3178 17.6892 23.1894C16.4767 22.9358 14.9799 22.4797 13.8035 22.0941C13.2115 21.9001 12.6936 21.7216 12.3236 21.5916C12.1385 21.5265 11.9902 21.4735 11.8878 21.4367L11.8522 21.4238C8.48271 21.3843 5.46883 19.8566 3.55066 17.4735C2.10188 15.7237 1.23621 13.5057 1.23621 11.1034Z"
                        fill="skyblue"
                      ></Path>
                      <Path
                        id="vector (Stroke)_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3377 5.76872C17.6953 5.55961 18.1546 5.67997 18.3637 6.03753C19.238 7.53261 19.7362 9.26182 19.7362 11.1037C19.7362 12.9412 19.2385 14.6675 18.3633 16.1604C18.1538 16.5178 17.6943 16.6376 17.337 16.4281C16.9797 16.2187 16.8598 15.7592 17.0693 15.4018C17.8138 14.1319 18.2362 12.6664 18.2362 11.1037C18.2362 9.53624 17.8131 8.06734 17.0689 6.79475C16.8598 6.43719 16.9801 5.97782 17.3377 5.76872Z"
                        fill="skyblue"
                      ></Path>
                    </G>
                  </G>
                </G>
              </Svg>
              <Svg
                style={styles.req_uest}
                fill="skyblue"
                viewBox="0 0 24 24"
                id="repost-round"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon flat-color"
              >
                <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                <G
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></G>
                <G id="SVGRepo_iconCarrier">
                  <Path
                    id="secondary"
                    d="M20.71,11.29l-2-2a1,1,0,0,0-1.42,0l-2,2a1,1,0,0,0,1.42,1.42l.29-.3V15a5,5,0,0,1-9.07,2.89A1,1,0,1,0,6.29,19,7,7,0,0,0,12,22a7,7,0,0,0,7-7V12.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,11.29Z"
                    style="fill: skyblue;"
                  ></Path>
                  <Path
                    id="primary"
                    d="M17.71,5A7,7,0,0,0,12,2,7,7,0,0,0,5,9v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42l-.29.3V9a5,5,0,0,1,9.07-2.89A1,1,0,0,0,17.71,5Z"
                    style="fill: skyblue;"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.se_nd}
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
                    opacity="0.4"
                    d="M7.11039 5.96003L16.1304 2.95003C20.1804 1.60003 22.3804 3.81003 21.0404 7.86003L18.0304 16.88C16.0104 22.95 12.6904 22.95 10.6704 16.88L9.78039 14.2L7.10039 13.31C1.04039 11.3 1.04039 7.99003 7.11039 5.96003Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1191 11.6301L15.9291 7.81006L12.1191 11.6301Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
            </View>
            <View style={styles.ic_on}>
              <View>
                <Text>Like</Text>
              </View>
              <View>
                <Text>Comment</Text>
              </View>
              <View>
                <Text>Repost</Text>
              </View>
              <View>
                <Text>Send</Text>
              </View>
            </View>
          </View>

          <View style={styles.ho_me}>
            <View style={styles.im_age}>
              <View style={styles.in_dia}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("profile2.3cr");
                  }}
                >
                  <Image
                    source={require("./aluminimage/pinki.jpg")}
                    style={styles.new_s}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.ar_jun}>
                <Text style={styles.na_me}>Priyanshu Bhatt</Text>
                <Text style={styles.na_bb}>web developer</Text>
              </View>
              <TouchableOpacity style={styles.foll_wo}>
                <Text style={styles.fll_bak}>+Follow</Text>
                <Text style={styles.fll_wig}>...</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.con_tnt}>
            <Text style={styles.wri_te}>
              Creating ins't required,but linking back is appreciated and allows
              image authous to gain exposure. You can use the follwing text:
            </Text>

            <View style={styles.tab_le}>
              <Image
                source={require("./aluminimage/game.jpeg")}
                style={styles.ne_img}
              />
            </View>
            <View style={[styles.ic_on, styles.mt]}>
              <Svg
                style={styles.sv_g}
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
                    opacity="0.4"
                    d="M21.6509 10.03C21.2609 9.46997 20.5709 9.14997 19.7809 9.14997H15.6809C15.4109 9.14997 15.1609 9.03998 14.9909 8.83998C14.8109 8.63998 14.7409 8.35997 14.7809 8.06997L15.2909 4.78997C15.5109 3.80997 14.8609 2.70998 13.8809 2.37998C12.9709 2.03998 11.9009 2.49998 11.4709 3.14998L7.25086 9.41998L7.13086 9.61998V18.46L7.28086 18.61L10.4509 21.06C10.8709 21.48 11.8209 21.71 12.4909 21.71H16.3909C17.7309 21.71 19.0809 20.7 19.3809 19.47L21.8409 11.98C22.1009 11.27 22.0309 10.58 21.6509 10.03Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.com_nt}
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
                  <G id="style=bulk">
                    <G id="comment">
                      <Path
                        id="vector (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.23621 11.1034C1.23621 5.36133 6.07454 0.763672 11.9862 0.763671C14.2426 0.763671 16.3321 1.4227 18.073 2.58609C20.8865 4.4319 22.7362 7.55126 22.7362 11.1034C22.7362 14.2061 21.3193 16.9815 19.0724 18.8609C19.1676 18.9782 19.2691 19.1076 19.371 19.2448C19.5794 19.5251 19.8007 19.8529 19.9732 20.1857C20.1354 20.4987 20.3019 20.9046 20.3019 21.3173C20.3019 22.0126 19.8872 22.5507 19.4096 22.8608C18.9306 23.1718 18.303 23.3178 17.6892 23.1894C16.4767 22.9358 14.9799 22.4797 13.8035 22.0941C13.2115 21.9001 12.6936 21.7216 12.3236 21.5916C12.1385 21.5265 11.9902 21.4735 11.8878 21.4367L11.8522 21.4238C8.48271 21.3843 5.46883 19.8566 3.55066 17.4735C2.10188 15.7237 1.23621 13.5057 1.23621 11.1034Z"
                        fill="skyblue"
                      ></Path>
                      <Path
                        id="vector (Stroke)_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3377 5.76872C17.6953 5.55961 18.1546 5.67997 18.3637 6.03753C19.238 7.53261 19.7362 9.26182 19.7362 11.1037C19.7362 12.9412 19.2385 14.6675 18.3633 16.1604C18.1538 16.5178 17.6943 16.6376 17.337 16.4281C16.9797 16.2187 16.8598 15.7592 17.0693 15.4018C17.8138 14.1319 18.2362 12.6664 18.2362 11.1037C18.2362 9.53624 17.8131 8.06734 17.0689 6.79475C16.8598 6.43719 16.9801 5.97782 17.3377 5.76872Z"
                        fill="skyblue"
                      ></Path>
                    </G>
                  </G>
                </G>
              </Svg>
              <Svg
                style={styles.req_uest}
                fill="skyblue"
                viewBox="0 0 24 24"
                id="repost-round"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon flat-color"
              >
                <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                <G
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></G>
                <G id="SVGRepo_iconCarrier">
                  <Path
                    id="secondary"
                    d="M20.71,11.29l-2-2a1,1,0,0,0-1.42,0l-2,2a1,1,0,0,0,1.42,1.42l.29-.3V15a5,5,0,0,1-9.07,2.89A1,1,0,1,0,6.29,19,7,7,0,0,0,12,22a7,7,0,0,0,7-7V12.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,11.29Z"
                    style="fill: skyblue;"
                  ></Path>
                  <Path
                    id="primary"
                    d="M17.71,5A7,7,0,0,0,12,2,7,7,0,0,0,5,9v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42l-.29.3V9a5,5,0,0,1,9.07-2.89A1,1,0,0,0,17.71,5Z"
                    style="fill: skyblue;"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.se_nd}
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
                    opacity="0.4"
                    d="M7.11039 5.96003L16.1304 2.95003C20.1804 1.60003 22.3804 3.81003 21.0404 7.86003L18.0304 16.88C16.0104 22.95 12.6904 22.95 10.6704 16.88L9.78039 14.2L7.10039 13.31C1.04039 11.3 1.04039 7.99003 7.11039 5.96003Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1191 11.6301L15.9291 7.81006L12.1191 11.6301Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
            </View>
            <View style={styles.ic_on}>
              <View>
                <Text>Like</Text>
              </View>
              <View>
                <Text>Comment</Text>
              </View>
              <View>
                <Text>Repost</Text>
              </View>
              <View>
                <Text>Send</Text>
              </View>
            </View>
          </View>

          <View style={styles.ho_me}>
            <View style={styles.im_age}>
              <View style={styles.in_dia}>
                <Image
                  source={require("./aluminimage/kartik.jpg")}
                  style={styles.new_s}
                />
              </View>
              <View style={styles.ar_jun}>
                <Text style={styles.na_me}>Kartik Verma</Text>
                <Text style={styles.na_bb}>Game developer</Text>
              </View>
              <TouchableOpacity style={styles.foll_wo}>
                <Text style={styles.fll_bak}>+Follow</Text>
                <Text style={styles.fll_wig}>...</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.con_tnt}>
            <Text style={styles.wri_te}>
              Creating ins't required,but linking back is appreciated and allows
              image authous to gain exposure. You can use the follwing text:
            </Text>

            <View style={styles.tab_le}>
              <Image
                source={require("./aluminimage/game2.jpeg")}
                style={styles.ne_img}
              />
            </View>
            <View style={[styles.ic_on, styles.mt]}>
              <Svg
                style={styles.sv_g}
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
                    opacity="0.4"
                    d="M21.6509 10.03C21.2609 9.46997 20.5709 9.14997 19.7809 9.14997H15.6809C15.4109 9.14997 15.1609 9.03998 14.9909 8.83998C14.8109 8.63998 14.7409 8.35997 14.7809 8.06997L15.2909 4.78997C15.5109 3.80997 14.8609 2.70998 13.8809 2.37998C12.9709 2.03998 11.9009 2.49998 11.4709 3.14998L7.25086 9.41998L7.13086 9.61998V18.46L7.28086 18.61L10.4509 21.06C10.8709 21.48 11.8209 21.71 12.4909 21.71H16.3909C17.7309 21.71 19.0809 20.7 19.3809 19.47L21.8409 11.98C22.1009 11.27 22.0309 10.58 21.6509 10.03Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.com_nt}
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
                  <G id="style=bulk">
                    <G id="comment">
                      <Path
                        id="vector (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.23621 11.1034C1.23621 5.36133 6.07454 0.763672 11.9862 0.763671C14.2426 0.763671 16.3321 1.4227 18.073 2.58609C20.8865 4.4319 22.7362 7.55126 22.7362 11.1034C22.7362 14.2061 21.3193 16.9815 19.0724 18.8609C19.1676 18.9782 19.2691 19.1076 19.371 19.2448C19.5794 19.5251 19.8007 19.8529 19.9732 20.1857C20.1354 20.4987 20.3019 20.9046 20.3019 21.3173C20.3019 22.0126 19.8872 22.5507 19.4096 22.8608C18.9306 23.1718 18.303 23.3178 17.6892 23.1894C16.4767 22.9358 14.9799 22.4797 13.8035 22.0941C13.2115 21.9001 12.6936 21.7216 12.3236 21.5916C12.1385 21.5265 11.9902 21.4735 11.8878 21.4367L11.8522 21.4238C8.48271 21.3843 5.46883 19.8566 3.55066 17.4735C2.10188 15.7237 1.23621 13.5057 1.23621 11.1034Z"
                        fill="skyblue"
                      ></Path>
                      <Path
                        id="vector (Stroke)_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3377 5.76872C17.6953 5.55961 18.1546 5.67997 18.3637 6.03753C19.238 7.53261 19.7362 9.26182 19.7362 11.1037C19.7362 12.9412 19.2385 14.6675 18.3633 16.1604C18.1538 16.5178 17.6943 16.6376 17.337 16.4281C16.9797 16.2187 16.8598 15.7592 17.0693 15.4018C17.8138 14.1319 18.2362 12.6664 18.2362 11.1037C18.2362 9.53624 17.8131 8.06734 17.0689 6.79475C16.8598 6.43719 16.9801 5.97782 17.3377 5.76872Z"
                        fill="skyblue"
                      ></Path>
                    </G>
                  </G>
                </G>
              </Svg>
              <Svg
                style={styles.req_uest}
                fill="skyblue"
                viewBox="0 0 24 24"
                id="repost-round"
                data-name="Flat Color"
                xmlns="http://www.w3.org/2000/svg"
                class="icon flat-color"
              >
                <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                <G
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></G>
                <G id="SVGRepo_iconCarrier">
                  <Path
                    id="secondary"
                    d="M20.71,11.29l-2-2a1,1,0,0,0-1.42,0l-2,2a1,1,0,0,0,1.42,1.42l.29-.3V15a5,5,0,0,1-9.07,2.89A1,1,0,1,0,6.29,19,7,7,0,0,0,12,22a7,7,0,0,0,7-7V12.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,11.29Z"
                    style="fill: skyblue;"
                  ></Path>
                  <Path
                    id="primary"
                    d="M17.71,5A7,7,0,0,0,12,2,7,7,0,0,0,5,9v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42l-.29.3V9a5,5,0,0,1,9.07-2.89A1,1,0,0,0,17.71,5Z"
                    style="fill: skyblue;"
                  ></Path>
                </G>
              </Svg>
              <Svg
                style={styles.se_nd}
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
                    opacity="0.4"
                    d="M7.11039 5.96003L16.1304 2.95003C20.1804 1.60003 22.3804 3.81003 21.0404 7.86003L18.0304 16.88C16.0104 22.95 12.6904 22.95 10.6704 16.88L9.78039 14.2L7.10039 13.31C1.04039 11.3 1.04039 7.99003 7.11039 5.96003Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1191 11.6301L15.9291 7.81006L12.1191 11.6301Z"
                    fill="skyblue"
                  ></Path>
                  <Path
                    d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z"
                    fill="skyblue"
                  ></Path>
                </G>
              </Svg>
            </View>
            <View style={styles.ic_on}>
              <View>
                <Text>Like</Text>
              </View>
              <View>
                <Text>Comment</Text>
              </View>
              <View>
                <Text>Repost</Text>
              </View>
              <View>
                <Text>Send</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sav: {
    height: "100%",
    width: "100%",
    paddingTop: sb.currentHeight,
    backgroundColor: "gray",
  },
  ho_me: {
    // height: "100%",
    width: "100%",
    height: 70,
    backgroundColor: "white",
    marginTop: 3,
    paddingTop: 10,
  },
  im_age: {
    height: 70,
    width: "100%",
    flexDirection: "row",
  },
  in_dia: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
  new_s: {
    height: 60,
    width: 60,
    backgroundColor: "red",
    borderRadius: 400,
    marginLeft: 10,
  },
  ar_jun: {
    height: "100%",
    width: "55%",
    marginLeft: 15,
  },
  na_me: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
  },
  na_bb: {
    color: "black",
  },
  con_tnt: {
    height: 370,
    backgroundColor: "white",
    width: "100%",
  },
  wri_te: {
    color: "black",
    alignSelf: "center",

    // backgroundColor: "red",
  },
  foll_wo: {
    height: "40%",
    width: "25%",
    alignItems: "center",
  },
  fll_bak: {
    color: "blue",
    fontSize: 12,
    fontWeight: "850",
    flexDirection: "row",
  },
  fll_wig: {
    color: "black",
    fontSize: 20,
  },
  tab_le: {
    height: "60%",
    width: "100%",
  },
  ne_img: {
    height: "100%",
    width: "100%",
    marginTop: 10,
  },
  sv_g: {
    height: 25,
    width: 25,
    // marginLeft: 25,
  },
  com_nt: {
    height: 25,
    width: 25,
    // marginLeft: 70,
  },
  req_uest: {
    height: 25,
    width: 25,
    // marginLeft: 70,
  },
  se_nd: {
    height: 25,
    width: 25,
    // marginLeft: 60,
  },
  ic_on: {
    flexDirection: "row",
    height: 30,
    justifyContent: "space-around",
    alignItems: "center",
  },
  mt: {
    marginTop: 20,
  },
  o_sv: {
    height: "100%",
    width: "100%",
  },
});
