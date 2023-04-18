import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "./GlobalStyles";

const DraftLobby = () => {
  return (
    <View style={styles.draftLobby}>
      <Image
        style={styles.tabBarIcon}
        resizeMode="cover"
        source={require("./assets/navBackground.png")}
      />
      <Pressable
        style={[styles.homeIconPosition]}
        onPress={() => navigation.navigate("UserHomepage")}
      >
        <Image
          resizeMode="cover"
          source={require("./assets/homeIcon.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.settingsIconPosition]}
        onPress={() => navigation.navigate("UserHomepage")}
      >
        <Image
          resizeMode="cover"
          source={require("./assets/settingsIcon.png")}
        />
      </Pressable>
      <Text style={[styles.round1, styles.round1Typo]}>Round 1:</Text>
      <Text style={[styles.nextPickR13, styles.round1Typo]}>
        Next Pick: R1.3
      </Text>
      <Text style={[styles.positionLimitsPg, styles.round1Typo]}>
        Position Limits: PG 0/3 | SG 0/3 | SF 0/3 | PF 0/3 | C 0/3
      </Text>
      <View style={styles.draftLobbyChild} />
      <Text style={styles.availablePlayersSorted}>
        Available players sorted by projections
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  round1Typo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  round1: {
    fontSize: FontSize.size_lg,
    top: 135,
    textAlign: "left",
    color: Color.white,
    left: 23,
  },
  nextPickR13: {
    left: 239,
    fontSize: FontSize.size_lg,
    top: 135,
    textAlign: "left",
    color: Color.white,
  },
  positionLimitsPg: {
    top: 803,
    fontSize: 12,
    left: 23,
  },
  draftLobbyChild: {
    top: 245,
    left: 31,
    backgroundColor: Color.gainsboro,
    width: 328,
    height: 485,
    position: "absolute",
  },
  availablePlayersSorted: {
    top: 443,
    left: 52,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 285,
    height: 51,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  tabBarIcon: {
    top: 0,
    left: 0,
    width: 390,
    height: 105,
    position: "absolute",
  },
  draftLobby: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  homeIconPosition: {
    left: "13%",
    top: "5.5%",
    position: "absolute",
  },
  settingsIconPosition: {
    left: "77%",
    top: "5.5%",
    position: "absolute",
  }
});

export default DraftLobby;
