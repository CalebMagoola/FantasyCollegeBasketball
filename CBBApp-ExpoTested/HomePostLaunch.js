import * as React from "react";
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "./GlobalStyles";

const HomePostLaunch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePostLaunch}>
      <Text style={[styles.collegeFantasy, styles.logInFlexBox]}>
        COLLEGE FANTASY
      </Text>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("./assets/image-1.png")}
      />
      <Pressable
        style={[styles.logInButton, styles.logLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image
          style={styles.logInButtonChild}
          resizeMode="cover"
          source={require("./assets/rectangle-1.png")}
        />
        <Text style={[styles.logIn, styles.logLayout]}>Log in</Text>
      </Pressable>
      <Pressable
        style={[styles.signUpButton, styles.logLayout]}
        onPress={() => navigation.navigate("SignUpInformationCollection")}
      >
        <Image
          style={styles.logInButtonChild}
          resizeMode="cover"
          source={require("./assets/rectangle-1.png")}
        />
        <Text style={[styles.logIn, styles.logLayout]}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logInFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  logLayout: {
    height: 65,
    position: "absolute",
  },
  collegeFantasy: {
    top: 126,
    left: 43,
    fontSize: 40,
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtrabold,
    color: Color.white,
    width: 316,
    height: 118,
    position: "absolute",
  },
  image1Icon: {
    top: 317,
    left: 107,
    width: 187,
    height: 187,
    position: "absolute",
  },
  logInButtonChild: {
    top: -11,
    left: -24,
    borderRadius: Border.br_41xl,
    width: 284,
    height: 95,
    position: "absolute",
  },
  logIn: {
    marginLeft: -95,
    top: 0,
    left: "50%",
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    lineHeight: 60,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.darkslateblue,
    width: 190,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  logInButton: {
    top: 567,
    width: 236,
    left: 83,
    height: 65,
  },
  signUpButton: {
    top: 646,
    width: 236,
    left: 83,
    height: 65,
  },
  homePostLaunch: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomePostLaunch;
