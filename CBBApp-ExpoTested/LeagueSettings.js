import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, Border, FontSize } from "./GlobalStyles";

const LeagueSettings = () => {
  return (
    <View style={styles.leagueSettings}>
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
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          resizeMode="cover"
          source={require("./assets/settingsIcon.png")}
        />
      </Pressable>
      <View style={styles.leagueSettingsChild} />
      <Text
        style={[styles.softwareEngineeringLeague, styles.scorePerPointTypo]}
      >
        Software engineering league
      </Text>
      <Text
        style={[styles.scorePerPoint, styles.scorePerPointTypo]}
      >{`Score per point:                 1.0

Score per rebound:            1.0

Score per assist:                 2.0

Score per block:                 2.0

Score per steal:                  2.0

Score per turnover:          -2.0`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scorePerPointTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  leagueSettingsChild: {
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
    fontSize: FontSize.size_xl,
    textDecoration: "underline",
  },
  scorePerPoint: {
    top: 236,
    left: 71,
    fontSize: FontSize.size_lg,
    width: 250,
  },
  tabBarIcon: {
    top: 0,
    left: 1,
    width: 390,
    height: 105,
    position: "absolute",
  },
  leagueSettings: {
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

export default LeagueSettings;
