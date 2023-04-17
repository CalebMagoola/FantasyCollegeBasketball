import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <View style={[styles.logInChild, styles.logLayout]} />
      <View style={[styles.logInItem, styles.logLayout]} />
      <Pressable
        style={styles.logIn1}
        onPress={() => navigation.navigate("UserHomepage")}
      >
        <Image
          style={styles.logInInner}
          resizeMode="cover"
          source={require("./assets/rectangle-1.png")}
        />
        <Text style={styles.logIn2}>Log in</Text>
      </Pressable>
      <Text style={[styles.enterUsername, styles.enterTypo]}>
        enter username
      </Text>
      <Text style={[styles.enterPassword, styles.enterTypo]}>
        enter password
      </Text>
      
      <Pressable
        style={styles.arrowLeftIcon}
        onPress={() => navigation.navigate("HomePostLaunch")}
        >
        <Image
          resizeMode="cover"
          source={require("./assets/arrowleft1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logLayout: {
    height: 2,
    width: 265,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    left: 62,
    position: "absolute",
  },
  enterTypo: {
    opacity: 0.8,
    color: Color.white,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  logInChild: {
    top: 209,
  },
  logInItem: {
    top: 309,
  },
  logInInner: {
    top: -11,
    left: -24,
    borderRadius: Border.br_41xl,
    width: 284,
    height: 95,
    position: "absolute",
  },
  logIn2: {
    marginLeft: -95,
    top: 0,
    left: "50%",
    fontSize: FontSize.size_11xl,
    color: Color.darkslateblue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 190,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 60,
    letterSpacing: 0,
    height: 65,
    position: "absolute",
  },
  logIn1: {
    top: 390,
    left: 77,
    width: 236,
    height: 65,
    position: "absolute",
  },
  enterUsername: {
    top: 180,
    left: 72,
  },
  enterPassword: {
    top: 280,
    left: 73,
  },
  arrowLeftIcon: {
    top: 33,
    left: 23,
    width: 44,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  logIn: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LogIn;
