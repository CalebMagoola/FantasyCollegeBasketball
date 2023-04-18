import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";

const CreateALeague = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.createALeague, styles.iconLayout]}>
      <View style={[styles.createALeagueChild, styles.createChildPosition]} />
      <View style={[styles.createALeagueItem, styles.createPosition]} />
      <Text style={[styles.leagueName, styles.leagueClr]}>League name:</Text>
      <View style={[styles.createALeagueInner, styles.createPosition]} />
      <Text style={[styles.confirmPassword, styles.leagueClr]}>
        Confirm password:
      </Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={[styles.leagueMembers, styles.leagueClr]}>
        League Members:
      </Text>
      <Text style={[styles.leaguePassword, styles.leagueClr]}>
        League password:
      </Text>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("UserHomepage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("./assets/arrowleft1.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.createChildLayout]}
        resizeMode="cover"
        source={require("./assets/rectangle-24.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector2.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>8</Text>
      <View style={[styles.createALeagueChild1, styles.createChildPosition]} />
      <Text style={[styles.regularSeasonWeeks, styles.text1Typo]}>
        Regular Season Weeks:
      </Text>
      <Image
        style={[styles.createALeagueChild2, styles.createChildLayout]}
        resizeMode="cover"
        source={require("./assets/rectangle-4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector2.png")}
      />
      <Text style={[styles.text1, styles.text1Typo]}>15</Text>
      <View style={[styles.createALeagueChild3, styles.lineViewLayout]} />
      <Text style={[styles.scoringSystem, styles.leagueClr]}>
        Scoring System
      </Text>
      <Image
        style={[styles.createALeagueChild4, styles.createChildLayout]}
        resizeMode="cover"
        source={require("./assets/rectangle-3.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector2.png")}
      />
      <Text style={[styles.standard, styles.textLayout]}>Standard</Text>
      <Pressable
        style={[styles.createLeagueButton, styles.createLayout]}
        onPress={() => navigation.navigate("UserHomepage")}
      >
        <Image
          style={styles.createLeagueButtonChild}
          resizeMode="cover"
          source={require("./assets/rectangle-5.png")}
        />
        <Text style={[styles.createLeague, styles.createLayout]}>
          Create League
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  createChildPosition: {
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    left: 45,
    position: "absolute",
  },
  createPosition: {
    left: 44,
    height: 2,
    width: 265,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  leagueClr: {
    opacity: 0.8,
    color: Color.white,
  },
  lineViewLayout: {
    width: 151,
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    left: 45,
    position: "absolute",
  },
  createChildLayout: {
    height: 78,
    borderRadius: Border.br_41xl,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.05%",
    height: "0.95%",
    position: "absolute",
    overflow: "hidden",
  },
  textLayout: {
    height: 30,
    left: "50%",
    color: Color.black,
  },
  text1Typo: {
    top: 404,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  createLayout: {
    height: 55,
    width: 315,
    position: "absolute",
  },
  createALeagueChild: {
    top: 152,
    width: 265,
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    left: 45,
  },
  createALeagueItem: {
    top: 220,
  },
  leagueName: {
    top: 121,
    width: 115,
    height: 26,
    opacity: 0.8,
    color: Color.white,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 46,
    position: "absolute",
  },
  createALeagueInner: {
    top: 289,
  },
  confirmPassword: {
    top: 258,
    width: 156,
    height: 26,
    opacity: 0.8,
    color: Color.white,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 46,
    position: "absolute",
  },
  lineView: {
    top: 359,
  },
  leagueMembers: {
    top: 328,
    width: 148,
    height: 26,
    opacity: 0.8,
    color: Color.white,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 46,
    position: "absolute",
  },
  leaguePassword: {
    top: 191,
    width: 149,
    height: 25,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 46,
    position: "absolute",
    opacity: 0.8,
    color: Color.white,
  },
  icon: {
    height: "100%",
  },
  arrowLeft: {
    left: 23,
    top: 33,
    width: 44,
    height: 44,
    position: "absolute",
  },
  rectangleIcon: {
    top: 310,
    width: 103,
    left: 199,
    height: 78,
  },
  vectorIcon: {
    top: "40.4%",
    right: "32.05%",
    bottom: "58.65%",
    left: "65.9%",
  },
  text: {
    top: 330,
    width: 38,
    height: 30,
    left: "50%",
    marginLeft: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  createALeagueChild1: {
    top: 435,
    width: 195,
    height: 2,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    left: 45,
  },
  regularSeasonWeeks: {
    width: 193,
    opacity: 0.8,
    color: Color.white,
    height: 26,
    left: 46,
    top: 404,
  },
  createALeagueChild2: {
    top: 384,
    left: 237,
    width: 110,
  },
  vectorIcon1: {
    top: "49.29%",
    right: "20%",
    bottom: "49.76%",
    left: "77.95%",
  },
  text1: {
    marginLeft: 72,
    height: 30,
    left: "50%",
    color: Color.black,
    width: 38,
  },
  createALeagueChild3: {
    top: 505,
  },
  scoringSystem: {
    top: 474,
    left: 47,
    textAlign: "left",
    width: 127,
    height: 26,
    opacity: 0.8,
    color: Color.white,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  createALeagueChild4: {
    top: 456,
    width: 188,
    left: 199,
    height: 78,
  },
  vectorIcon2: {
    top: "57.7%",
    right: "10.77%",
    bottom: "41.35%",
    left: "87.18%",
  },
  standard: {
    top: 476,
    width: 118,
    height: 30,
    left: "50%",
    marginLeft: 28,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  createLeagueButtonChild: {
    top: -19,
    left: -23,
    width: 362,
    height: 102,
    borderRadius: Border.br_41xl,
    position: "absolute",
  },
  createLeague: {
    top: 0,
    left: 0,
    fontSize: 26,
    color: Color.black,
    width: 315,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 45,
    letterSpacing: 0,
  },
  createLeagueButton: {
    top: 610,
    left: 37,
  },
  createALeague: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    height: 844,
  },
});

export default CreateALeague;
