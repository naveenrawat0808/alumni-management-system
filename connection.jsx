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
  SafeAreaView,
  Pressable,
  StatusBar as sb,
  ScrollView,
} from "react-native";
import { Svg, Path, G, Circle, Ellipse } from "react-native-svg";
import { useState } from "react";

export default function Note10() {
  // const [side_bar, setSide_bar] = useState(false);
  return (
    <>
      <View style={styles.ho_me}>
        <View style={styles.im_age}>
          <TouchableOpacity
            style={styles.in_dia}
            onPress={() => {
              setSide_bar(true);
            }}
          >
            <Image
              source={require("./aluminimage/grup.jpg")}
              style={styles.new_s}
            />
          </TouchableOpacity>
          <View style={styles.ic_on}>
            <TouchableOpacity style={styles.to}>
              <TextInput
                style={styles.sea_rch}
                placeholder="search"
              ></TextInput>
              <Svg
                style={styles.sv_g}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
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
                    d="M7 1C3.69 1 1 3.69 1 7s2.69 6 6 6a5.948 5.948 0 0 0 3.664-1.273l2.863 2.863 1.063-1.063-2.863-2.863A5.949 5.949 0 0 0 13 7c0-3.31-2.69-6-6-6zm0 1a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z"
                    style="line-height:normal;font-variant-ligatures:none;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;shape-padding:0;isolation:auto;mix-blend-mode:normal;marker:none"
                    color="#000000"
                    font-weight="400"
                    font-family="sans-serif"
                    white-space="normal"
                    overflow="visible"
                    fill="gray"
                  ></Path>
                </G>
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={styles.mess_ge}>
            <TouchableOpacity>
              <Svg
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                mirror-in-rtl="true"
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
                    d="M16 2H2a1.5 1.5 0 0 0-.37.04A1.981 1.981 0 0 0 .04 3.63 1.5 1.5 0 0 0 0 4v8a1.5 1.5 0 0 0 .04.37 1.981 1.981 0 0 0 1.59 1.59A1.5 1.5 0 0 0 2 14l2 .02V16a.987.987 0 0 0 .62.92A.839.839 0 0 0 5 17c.266 0 .52-.103.71-.29L8 14h8a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2zM3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    fill="#494c4e"
                    fill-rule="evenodd"
                  ></Path>
                </G>
              </Svg>
            </TouchableOpacity>
            {/* <Text style={styles.mess_in}>Message</Text> */}
          </View>
        </View>

        <View style={styles.manage}>
          <Text style={styles.net}>Manage my network</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.rawat}>
          <View style={styles.view_point}>
            <View style={styles.cover}>
              <Image
                source={require("./aluminimage/grup.jpg")}
                style={styles.grup}
              />
              <Text style={styles.content}>Naveen Rawat</Text>
              <Text style={styles.para}>
                Associate Software Engg at || javaScript || react.......
              </Text>
              <Text style={styles.based}>Based on your profile</Text>
              <TouchableOpacity style={styles.connect}>
                <Text style={styles.cover_content}>Connect</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hiddn_content}></View>
          </View>
          <View style={styles.view_point}>
            <View style={styles.cover}>
              <Image
                source={require("./aluminimage/grup.jpg")}
                style={styles.grup}
              />
              <Text style={styles.content}>Arjun Negi</Text>
              <Text style={styles.para}>
                Associate Software Engg at || javaScript || react.......
              </Text>
              <Text style={styles.based}>Based on your profile</Text>
              <TouchableOpacity style={styles.connect}>
                <Text style={styles.cover_content}>Connect</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.hiddn_content}></View>
          </View>
        </View>
      </View>

      {side_bar == true ? (
        <View style={styles.w_sb}>
          <View style={styles.sidebar}>
            {/* <SafeAreaView style={styles.sav}> */}
            <View style={styles.ho_me}>
              <View style={styles.im_age}>
                <View style={styles.in_dia}>
                  <Image
                    source={require("./aluminimage/grup.jpg")}
                    style={styles.neru}
                  />
                </View>
              </View>
            </View>
            <View style={styles.pro}>
              <Text style={styles.nam}> Arjun Negi</Text>
              <Text style={styles.jihaa}>View profile</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.pro}>
              <Text style={styles.hnji}>
                <Text style={styles.bolt}>50</Text> profile viewers
              </Text>
              <Text style={styles.hnji}>
                <Text style={styles.bolt}>200</Text> post impressions
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.bor_dr}>
              {/* <View>
                <Svg style={styles.lalala} viewBox="0 0 512 512" fill="#000000">
                  <G id="SVGRepo_bgCarrier"></G>
                  <G
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></G>
                  <G id="SVGRepo_iconCarrier">
                    <G
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="skyblue"
                    >
                      <G
                        id="icon"
                        fill="skyblue"
                        transform="translate(42.666667, 85.333333)"
                      >
                        <Path
                          d="M426.666667,1.42108547e-14 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,1.42108547e-14 L426.666667,1.42108547e-14 Z M362.666667,213.333333 L234.666667,213.333333 L234.666667,245.333333 L362.666667,245.333333 L362.666667,213.333333 Z M125.333333,155.733333 L109.333333,155.733333 C78.4053873,155.733333 53.3333333,181.333333 53.3333333,213.333333 L53.3333333,213.333333 L181.333333,213.333333 C181.333333,181.333333 156.16,155.733333 125.333333,155.733333 L125.333333,155.733333 Z M362.666667,149.333333 L234.666667,149.333333 L234.666667,181.333333 L362.666667,181.333333 L362.666667,149.333333 Z M117.333333,78.62624 C101.86936,78.62624 89.3333333,91.162267 89.3333333,106.62624 C89.3333333,122.090213 101.86936,134.62624 117.333333,134.62624 C132.797306,134.62624 145.333333,122.090213 145.333333,106.62624 C145.333333,91.162267 132.797306,78.62624 117.333333,78.62624 Z M362.666667,85.3333333 L234.666667,85.3333333 L234.666667,117.333333 L362.666667,117.333333 L362.666667,85.3333333 Z"
                          id="Combined-Shape"
                        ></Path>
                      </G>
                    </G>
                  </G>
                </Svg>
              </View>
              <View style={styles.cont}>
                <Text style={styles.font}>Contact</Text>
              </View> */}
            </View>
            <View style={styles.bor_dr}>
              <View>
                <Svg
                  style={styles.lalala}
                  fill="skyblue"
                  version="1.1"
                  viewBox="0 0 441.111 441.111"
                >
                  <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                  <G
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></G>
                  <G id="SVGRepo_iconCarrier">
                    <G>
                      <Path d="M306.908,30.556c-30.396,0-58.969,9.82-82.633,28.407l-3.717,2.926l-3.725-2.929 c-23.654-18.584-52.224-28.404-82.616-28.404c-38.436,0-73.153,16.251-97.646,42.236c10.043,4.86,32.966,12.719,78.952,15.005 c11.071,0.552,43.763,2.589,45.542,3.002c1.995,0.238,4.546,1.047,4.705,3.097c0.694,9.313-7.771,13.423-14.524,13.643 c-5.294,0.172-32.764-0.723-37.209,7.499c-2.029,3.744,9.065,12.56,12.508,15.789c4.288,4.028,8.586,8.054,12.885,12.079 c11.717,10.976,23.825,22.321,35.658,33.564c2.412,2.292,11.896,12.127,6.955,17.07c-4.944,4.942-14.658-3.259-18.087-6.45 c-8.789-8.178-40.172-34.782-41.443-33.652l-0.11,0.101c-1.473,1.475,47.752,50.258,47.752,50.258s14.82,13.814,9.274,19.36 c-5.548,5.549-19.359-7.84-22.712-10.969c-10.664-9.925-49.205-43.213-50.412-42.008c-0.85,0.869,33.358,36.715,43.582,46.501 c3.576,3.43,15.428,14.944,10.271,20.101c-5.152,5.16-17.305-5.748-20.313-8.531c-9.601-8.88-48.327-41.804-49.173-40.961 l-0.072,0.072c-0.866,0.898,22.18,26.296,31.482,35.036c2.754,2.578,5.505,5.469,6.995,9.096c1.482,3.604,1.413,5.81-0.244,7.612 c-0.059,0.069-0.122,0.129-0.186,0.192c-1.789,1.79-4.264,2.008-7.348,0.65c-3.609-1.592-6.529-3.41-8.669-5.4 c-22.82-21.193-41.785-38.273-58.484-54.975c-7.179-7.172-14.909-26.012-22.709-40.438c-4.646-8.592-14.908-17.136-22.448-22.64 C3.184,131.485,0,147.765,0,164.778c0,97.776,72.822,146.692,131.353,186c23.824,15.993,46.318,31.12,60.939,47.354 c7.115,7.902,17.256,12.424,27.889,12.424c0.038,0,0.067,0,0.094,0c10.677-0.031,20.825-4.598,27.918-12.568 c14.294-16.037,36.779-31.106,60.596-47.065c8.285-5.558,16.855-11.306,25.469-17.345c-5.33-7.596-14.812-19.695-24.367-24.858 c-14.422-7.8-33.264-15.536-40.437-22.708c-16.7-16.7-33.783-35.665-54.978-58.485c-1.985-2.146-3.803-5.065-5.395-8.675 c-1.362-3.084-1.145-5.556,0.645-7.347c0.064-0.062,0.129-0.122,0.192-0.187c1.804-1.654,4.007-1.724,7.62-0.241 c3.619,1.493,6.511,4.244,9.097,6.992c8.73,9.31,34.133,32.354,35.03,31.482l0.071-0.072c0.839-0.84-32.084-39.572-40.963-49.17 c-2.784-3.008-13.692-15.157-8.532-20.315c5.156-5.156,16.671,6.698,20.104,10.277c9.78,10.221,45.627,44.428,46.498,43.577 c1.203-1.202-32.084-39.749-42.006-50.407c-3.133-3.355-16.516-17.17-10.973-22.712c5.549-5.548,19.363,9.272,19.363,9.272 s48.779,49.222,50.254,47.751l0.104-0.11c1.129-1.274-25.477-32.655-33.654-41.444c-3.188-3.428-11.393-13.142-6.449-18.086 c4.941-4.944,14.785,4.542,17.07,6.958c11.244,11.83,22.592,23.941,33.568,35.655c4.02,4.299,8.051,8.594,12.074,12.888 c3.23,3.439,12.049,14.537,15.791,12.507c8.221-4.449,7.324-31.915,7.5-37.213c0.221-6.754,4.326-15.219,13.641-14.519 c2.053,0.153,2.857,2.71,3.1,4.703c0.414,1.779,2.449,34.47,3.002,45.544c2.139,43.055,9.166,65.896,14.039,76.868 c36.488-32.783,65.844-75.106,65.844-136.723C441.111,90.769,380.91,30.556,306.908,30.556z"></Path>
                    </G>
                  </G>
                </Svg>
              </View>
              <View style={styles.cont}>
                <Text style={styles.font}>Friends</Text>
              </View>
            </View>
            <View style={styles.bor_dr}>
              <View>
                <Svg
                  style={styles.lalala}
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
                    <Circle cx="9.00098" cy="6" r="4" fill="skyblue"></Circle>
                    <Ellipse
                      cx="9.00098"
                      cy="17.001"
                      rx="7"
                      ry="4"
                      fill="skyblue"
                    ></Ellipse>
                    <Path
                      d="M20.9996 17.0005C20.9996 18.6573 18.9641 20.0004 16.4788 20.0004C17.211 19.2001 17.7145 18.1955 17.7145 17.0018C17.7145 15.8068 17.2098 14.8013 16.4762 14.0005C18.9615 14.0005 20.9996 15.3436 20.9996 17.0005Z"
                      fill="skyblue"
                    ></Path>
                    <Path
                      d="M17.9996 6.00073C17.9996 7.65759 16.6565 9.00073 14.9996 9.00073C14.6383 9.00073 14.292 8.93687 13.9712 8.81981C14.4443 7.98772 14.7145 7.02522 14.7145 5.99962C14.7145 4.97477 14.4447 4.01294 13.9722 3.18127C14.2927 3.06446 14.6387 3.00073 14.9996 3.00073C16.6565 3.00073 17.9996 4.34388 17.9996 6.00073Z"
                      fill="skyblue"
                    ></Path>
                  </G>
                </Svg>
              </View>
              <View style={styles.cont}>
                <Text style={styles.font}>Groups</Text>
              </View>
            </View>
            <View style={styles.bor_dr}>
              <View>
                <Svg
                  style={styles.lalala}
                  viewBox="0 0 24 24"
                  fill="skyblue"
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
                      d="M18.5 18.8637V8.07579C18.5 5.99472 17.0378 4.20351 15.0077 3.7977C13.022 3.40077 10.978 3.40077 8.99225 3.7977C6.96219 4.20351 5.5 5.99472 5.5 8.07579V18.8637C5.5 20.1258 6.8627 20.9113 7.94601 20.2737L10.9053 18.5317C11.5814 18.1337 12.4186 18.1337 13.0947 18.5317L16.054 20.2737C17.1373 20.9113 18.5 20.1258 18.5 18.8637Z"
                      fill="skyblue"
                      fill-opacity="0.15"
                      stroke="#363853"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></Path>
                  </G>
                </Svg>
              </View>
              <View style={styles.cont}>
                <Text style={styles.font}>Saved</Text>
              </View>
            </View>
            <View style={styles.bor_dr}>
              <View>
                <Svg
                  style={styles.lalala}
                  viewBox="0 0 24 24"
                  fill="skyblue"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.4037 20.8018C14.0282 19.9702 20 16.5681 20 11.5C20 7 16.2667 4 12 4C7.87627 4 4 7 4 11.5C4 16.5681 9.97178 19.9702 11.5963 20.8018C11.8532 20.9334 12.1468 20.9334 12.4037 20.8018ZM11.7687 14.7565L8.97014 11.8107C8.3998 11.2103 8.31058 10.2991 8.75365 9.5995C9.49154 8.43441 11.2101 8.4922 11.868 9.70422L11.9376 9.83247C11.9645 9.88195 12.0355 9.88195 12.0624 9.83247L12.132 9.70422C12.7899 8.4922 14.5085 8.43441 15.2463 9.5995C15.6894 10.2991 15.6002 11.2103 15.0299 11.8107L12.2313 14.7565C12.1386 14.8541 12.0922 14.9029 12.0359 14.9142C12.0122 14.919 11.9878 14.919 11.9641 14.9142C11.9078 14.9029 11.8614 14.8541 11.7687 14.7565Z"
                      fill="skyblue"
                    ></Path>
                  </G>
                </Svg>
              </View>
              <View style={styles.cont}>
                <Text style={styles.font}>Favorites </Text>
              </View>
            </View>
            <View style={styles.bor_dr}>
              <View>
                <Svg
                  style={styles.lalala}
                  viewBox="0 0 24 24"
                  fill="skyblue"
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
                      opacity="0.5"
                      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                      fill="skyblue"
                    ></Path>
                    <Path
                      d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z"
                      fill="#1C274C"
                    ></Path>
                    <Path
                      d="M14.5 10.75C14.0858 10.75 13.75 10.4142 13.75 10C13.75 9.58579 14.0858 9.25 14.5 9.25H17C17.4142 9.25 17.75 9.58579 17.75 10V12.5C17.75 12.9142 17.4142 13.25 17 13.25C16.5858 13.25 16.25 12.9142 16.25 12.5V11.8107L14.2374 13.8232C13.554 14.5066 12.446 14.5066 11.7626 13.8232L10.1768 12.2374C10.0791 12.1398 9.92085 12.1398 9.82322 12.2374L7.53033 14.5303C7.23744 14.8232 6.76256 14.8232 6.46967 14.5303C6.17678 14.2374 6.17678 13.7626 6.46967 13.4697L8.76256 11.1768C9.44598 10.4934 10.554 10.4934 11.2374 11.1768L12.8232 12.7626C12.9209 12.8602 13.0791 12.8602 13.1768 12.7626L15.1893 10.75H14.5Z"
                      fill="skyblue"
                    ></Path>
                  </G>
                </Svg>
              </View>
              <View style={styles.cont}>
                <Text style={styles.font}>Analysis</Text>
              </View>
            </View>
            <View style={styles.bor_dr}>
              <View>
                <Svg
                  style={styles.lalala}
                  viewBox="0 0 24 24"
                  fill="skyblue"
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
                      d="M6.96006 2C7.37758 2 7.71605 2.30996 7.71605 2.69231V4.08883C8.38663 4.07692 9.13829 4.07692 9.98402 4.07692H14.016C14.8617 4.07692 15.6134 4.07692 16.284 4.08883V2.69231C16.284 2.30996 16.6224 2 17.0399 2C17.4575 2 17.7959 2.30996 17.7959 2.69231V4.15008C19.2468 4.25647 20.1992 4.51758 20.899 5.15838C21.5987 5.79917 21.8838 6.67139 22 8V9H2V8C2.11618 6.67139 2.4013 5.79917 3.10104 5.15838C3.80079 4.51758 4.75323 4.25647 6.20406 4.15008V2.69231C6.20406 2.30996 6.54253 2 6.96006 2Z"
                      fill="skyblue"
                    ></Path>
                    <Path
                      opacity="0.5"
                      d="M22 14V12C22 11.161 21.9873 9.66527 21.9744 9H2.00586C1.99296 9.66527 2.00564 11.161 2.00564 12V14C2.00564 17.7712 2.00564 19.6569 3.17688 20.8284C4.34813 22 6.23321 22 10.0034 22H14.0023C17.7724 22 19.6575 22 20.8288 20.8284C22 19.6569 22 17.7712 22 14Z"
                      fill="skyblue"
                    ></Path>
                    <Path
                      d="M18 16.5C18 17.3284 17.3284 18 16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5Z"
                      fill="skyblue"
                    ></Path>
                  </G>
                </Svg>
              </View>
              <View style={styles.cont}>
                <Text style={styles.font}>Event</Text>
              </View>
            </View>
            <View style={styles.bor_dr}>
              <View>
                <Svg
                  viewBox="0 0 32 32"
                  version="1.1"
                  fill="skyblue"
                  style={styles.lalala}
                >
                  <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                  <G
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></G>
                  <G id="SVGRepo_iconCarrier">
                    <G id="EnerGy20"></G>
                    <G id="EnerGy19"></G>
                    <G id="EnerGy18"></G>
                    <G id="EnerGy17"></G>
                    <G id="EnerGy16"></G>
                    <G id="EnerGy15"></G>
                    <G id="EnerGy14"></G>
                    <G id="EnerGy13"></G>
                    <G id="EnerGy12"></G>
                    <G id="EnerGy11">
                      <G>
                        <Path
                          d="M28,19c0,6.62-5.38,12-12,12S4,25.62,4,19C4,12.58,14.83,1.75,15.3,1.29c0.39-0.39,1.01-0.39,1.4,0 C17.17,1.75,28,12.58,28,19z"
                          fill="skyblue"
                        ></Path>
                      </G>
                      <G>
                        <Path
                          d="M14,26c-3.3086,0-6-2.6914-6-6c0-0.5527,0.4478-1,1-1s1,0.4473,1,1c0,2.2061,1.7944,4,4,4 c0.5522,0,1,0.4473,1,1S14.5522,26,14,26z"
                          fill="#FFFFFF"
                        ></Path>
                      </G>
                    </G>
                    <G id="Energy10"></G>
                    <G id="Energy09"></G>
                    <G id="Energy08"></G>
                    <G id="Energy07"></G>
                    <G id="Energy06"></G>
                    <G id="Energy05"></G>
                    <G id="Energy04"></G>
                    <G id="Energy03"></G>
                    <G id="Energy02"></G>
                    <G id="Energy01"></G>
                  </G>
                </Svg>
              </View>
              <View style={styles.cont}>
                <Text style={styles.font}>Blood Donation</Text>
              </View>
            </View>
            {/* </SafeAreaView> */}
          </View>
          {/* <Pressable
            style={styles.pb}
            onPress={() => {
              setSide_bar(false);
            }}
          ></Pressable> */}
        </View>
      ) : null}
    </>
  );
}
const styles = StyleSheet.create({
  mess_ge: {
    height: 25,
    width: 50,
    marginLeft: 15,
    marginTop: 25,
  },
  // mess_in: {
  //   color: "red",
  //   height: 20,
  //   backgroundColor: "red",
  //   width: "50%",
  // },
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    paddingTop: 12,
  },
  im_age: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    // marginRight: 20,
  },
  in_dia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  new_s: {
    height: 40,
    width: 40,
    // backgroundColor: "red",
    borderRadius: 400,
    marginRight: 10,
    marginTop: 18,
  },
  ic_on: {
    // borderBottomWidth: 1,
    height: 40,
    width: "60%",
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 2,
    // borderStyle: "solid",
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 30,
    borderWidth: 1,
  },
  sea_rch: {
    height: 30,
    width: "80%",
    display: "flex",
    alignSelf: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "200",
    backgroundColor: "white",
    // elevation: 4,

    // marginTop: 5,
    // borderStyle: "solid",
  },
  sv_g: {
    height: 20,
    width: 20,
  },
  to: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sidebar: {
    height: "100%",
    width: "70%",
    backgroundColor: "white",
    elevation: 2,
    // position: "absolute",
    zIndex: 1000,
    left: 0,
  },
  neru: {
    height: 60,
    width: 60,
    // backgroundColor: "red",
    borderRadius: 400,
    marginRight: 12,
  },
  pb: {
    height: "100%",
    width: "30%",
    backgroundColor: "#00000010",
    // elevation: 2,
    // position: "absolute",
    zIndex: 1000,
    left: 0,
  },
  // sav: {
  //   height: "100%",
  //   width: "100%",
  //   paddingTop: sb.currentHeight,
  //   backgroundColor: "gray",
  // },
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
    marginLeft: 14,
  },
  in_dia: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
  pro: {
    // height: 20,
    width: "100%",
  },
  nam: {
    height: 30,
    width: "40",
    fontSize: 23,
    fontWeight: "800",
    marginLeft: 19,
  },
  jihaa: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 24,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "lightgray",
    marginTop: 20,
  },
  // num: {
  //   height: 20,
  //   width: "30",
  //   fontSize: 20,
  //   fontWeight: "200",
  //   // marginLeft: 19,
  // },
  hnji: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 24,
    marginTop: 20,
    // flexDirection: "row",
  },
  bolt: {
    fontWeight: "800",
  },
  bor_dr: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
  lalala: {
    height: 22,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cont: {
    width: "80",
    display: "flex",
    justifyContent: "start",
  },
  font: {
    fontWeight: "800",
    fontSize: 17,
    letterSpacing: 2,
  },
  w_sb: {
    height: "100%",
    width: "100%",
    position: "absolute",
    marginTop: sb.currentHeight,
    left: 0,
    top: 0,
    flexDirection: "row",
  },
  manage: {
    height: "80%",
    width: "100%",
    marginTop: 5,
  },
  net: {
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 18,
    // color: "red",
    // backgroundColor: "blue",
  },
  line: {
    height: 5,
    width: "100%",
    backgroundColor: "lightgray",
    marginBottom: 5,
  },
  view_point: {
    height: 235,
    width: 175,
    marginLeft: 10,
    backgroundColor: "lightgray",
    borderRadius: 15,
    // display: "flex",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  cover: {
    height: 70,
    width: "100%",
    // borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    marginBottom: 169,
    backgroundColor: "lightblue",
  },
  grup: {
    height: 65,
    width: 65,
    // backgroundColor: "red",
    borderRadius: 400,
    marginLeft: 53,
    marginTop: 35,
  },
  hiddn_content: {
    // height: ,
    width: "100%",
    fontSize: 50,
  },
  content: {
    color: "black",
    height: 20,
    width: "100%",
    fontSize: 15,
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
    // backgroundColor: "green",
  },
  para: {
    height: 35,
    width: "100%",
    display: "flex",
    textAlign: "center",
  },
  rawat: {
    display: "flex",
    flexDirection: "row",
    maxHeight: "100%",
  },
  connect: {
    height: 38,
    width: "85%",
    backgroundColor: "#2ed68a",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 200,
    // borderWidth: 2,
    // borderColor: "black",
    marginTop: 8,
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
  based: {
    height: 20,
    width: "100%",
    marginTop: 5,
    display: "flex",
    textAlign: "center",
  },
  // side_view: {
  //   height: 230,
  //   width: 160,
  //   marginLeft: 10,
  //   backgroundColor: "lightgray",
  //   borderRadius: 15,
  //   flexDirection: "row",
  // },
});
