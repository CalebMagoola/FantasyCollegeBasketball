import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "./GlobalStyles";

const MyTeamsHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myTeamsHome}>
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
      <View style={styles.myTeamsHomeChild} />
      <Pressable
        style={[styles.teamIcon, styles.teamIconLayout]}
        onPress={() => navigation.navigate("SpecificTeamHome1")}
      >
        <View style={[styles.teamIconChild, styles.iconPosition]} />
        <Image
          style={styles.emojiBasketballAndHoop}
          resizeMode="cover"
          source={require("./assets/-emoji-basketball-and-hoop.png")}
        />
        <Text style={[styles.jakesTeam, styles.jakesTeamTypo]}>
          Jake’s Team
        </Text>
        <Text style={[styles.softwareEngineeringLeague, styles.jakesTeamTypo]}>
          Software engineering league
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  teamIconLayout: {
    height: 114,
    width: 294,
  },
  iconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  jakesTeamTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    left: 88,
    position: "absolute",
  },
  myTeamsHomeChild: {
    top: 147,
    left: 32,
    backgroundColor: Color.darkslateblue,
    width: 327,
    height: 648,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  teamIconChild: {
    backgroundColor: Color.gainsboro,
    height: 114,
    width: 294,
    borderRadius: Border.br_8xs,
  },
  emojiBasketballAndHoop: {
    top: 26,
    left: 13,
    width: 62,
    height: 62,
    position: "absolute",
  },
  jakesTeam: {
    top: 19,
    fontSize: FontSize.size_lg,
    width: 180,
    height: 25,
  },
  softwareEngineeringLeague: {
    top: 39,
    fontSize: FontSize.size_3xs,
    width: 136,
  },
  teamIcon: {
    top: 157,
    left: 49,
    position: "absolute",
  },
  tabBarIcon: {
    width: 390,
    height: 105,
  },
  myTeamsHome: {
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

export default MyTeamsHome;
