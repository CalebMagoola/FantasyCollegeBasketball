import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const MyLeaugesStandings = () => {
  return (
    <View style={styles.myLeaugesStandings}>
      <View style={styles.myLeaugesStandingsChild} />
      <Text style={[styles.softwareEngineeringLeague, styles.jakesTeam1Typo]}>
        Software engineering league
      </Text>
      <Text
        style={[styles.jakesTeam1, styles.jakesTeam1Typo]}
      >{`Jake’s Team                    1 - 0

Caleb’s team                  1 - 0

Jack’s Team                    0 - 1

Raf’s Team                      0 - 1

`}</Text>
      <Image
        style={styles.tabBarIcon}
        resizeMode="cover"
        source={require("./assets/tab-bar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  jakesTeam1Typo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  myLeaugesStandingsChild: {
    top: 147,
    left: 32,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.lightgray,
    width: 327,
    height: 648,
    position: "absolute",
  },
  softwareEngineeringLeague: {
    top: 167,
    left: 63,
    textDecoration: "underline",
  },
  jakesTeam1: {
    top: 221,
    left: 67,
    width: 270,
    height: 527,
  },
  tabBarIcon: {
    top: 0,
    left: 0,
    width: 390,
    height: 105,
    position: "absolute",
  },
  myLeaugesStandings: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default MyLeaugesStandings;
