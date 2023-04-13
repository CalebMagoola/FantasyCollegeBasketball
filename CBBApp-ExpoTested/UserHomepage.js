import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "./GlobalStyles";

const UserHomepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userHomepage}>
      <Image
        style={styles.tabBarIcon}
        resizeMode="cover"
        source={require("./assets/tab-bar.png")}
      />
      <Pressable
        style={[styles.myTeams, styles.teamsLayout]}
        onPress={() => navigation.navigate("MyTeamsHome")}
      >
        <View style={[styles.myTeamsChild, styles.childPosition]} />
        <Text style={[styles.myTeams1, styles.playersTypo]}>My Teams</Text>
      </Pressable>
      <Pressable
        style={[styles.myTeams2, styles.teamsLayout]}
        onPress={() => navigation.navigate("MyLeaugesHome")}
      >
        <View style={[styles.myTeamsChild, styles.childPosition]} />
        <Text style={[styles.myLeagues, styles.myLeaguesTypo]}>My Leagues</Text>
      </Pressable>
      <Pressable
        style={[styles.player, styles.playerLayout]}
        onPress={() => navigation.navigate("PlayerPool")}
      >
        <View style={[styles.playerChild, styles.playerLayout]} />
        <Text style={[styles.players, styles.playersTypo]}>Players</Text>
      </Pressable>
      <Pressable
        style={[styles.createLeaue, styles.playerLayout]}
        onPress={() => navigation.navigate("CreateALeague")}
      >
        <View style={[styles.playerChild, styles.playerLayout]} />
        <Text style={[styles.createALeague, styles.myLeaguesTypo]}>{`Create a
League`}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  teamsLayout: {
    height: 144,
    width: 129,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.darkslateblue,
    left: 0,
    top: 0,
  },
  playersTypo: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    top: 60,
    position: "absolute",
  },
  myLeaguesTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  playerLayout: {
    width: 128,
    height: 144,
    position: "absolute",
  },
  tabBarIcon: {
    width: 390,
    height: 105,
    left: 0,
    top: 0,
    position: "absolute",
  },
  myTeamsChild: {
    height: 144,
    width: 129,
    position: "absolute",
  },
  myTeams1: {
    left: 22,
    width: 84,
  },
  myTeams: {
    left: 215,
    top: 156,
    width: 129,
  },
  myLeagues: {
    left: 14,
    top: 60,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  myTeams2: {
    left: 45,
    top: 156,
    width: 129,
  },
  playerChild: {
    backgroundColor: Color.darkslateblue,
    left: 0,
    top: 0,
  },
  players: {
    left: 33,
    width: 61,
  },
  player: {
    top: 351,
    width: 128,
    left: 215,
  },
  createALeague: {
    top: 48,
    left: 29,
  },
  createLeaue: {
    top: 351,
    width: 128,
    left: 45,
  },
  userHomepage: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UserHomepage;
