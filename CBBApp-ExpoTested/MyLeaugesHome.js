import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "./GlobalStyles";

const MyLeaugesHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myLeaugesHome}>
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
      <View style={styles.myLeaugesHomeChild} />
      <Pressable
        style={[styles.league1, styles.leagueLayout]}
        onPress={() => navigation.navigate("SpecificTeamHome1")}
      >
        <View style={[styles.league1Child, styles.tabBarIconPosition]} />
        <Pressable
          style={styles.leagueSettings}
          onPress={() => navigation.navigate("LeagueSettings")}
        >
          <Text style={styles.leagueTypo}>League Settings</Text>
        </Pressable>
        <Text style={styles.softwareEngineeringLeague}>
          Software engineering league
        </Text>
        <Text
          style={[styles.jakesTeam1, styles.jakesTeam1Typo]}
        >{`Jake’s Team:     1- 0                     T-1st `}</Text>
        <Pressable
          style={[styles.standings, styles.standingsPosition]}
          onPress={() => navigation.navigate("MyLeaugesStandings")}
        >
          <Text style={[styles.standings1, styles.standings1Typo]}>
            Standings
          </Text>
        </Pressable>
        <Pressable
          style={[styles.waiverWire, styles.standingsPosition]}
          onPress={() => navigation.navigate("TeamLeaguePlayerPool")}
        >
          <Text style={[styles.waiverWire1, styles.standings1Typo]}>
            Waiver Wire
          </Text>
        </Pressable>
      </Pressable>
      <Pressable
        style={[styles.league2, styles.leagueLayout]}
        onPress={() => navigation.navigate("DraftLobby")}
      >
        <View style={[styles.league1Child, styles.tabBarIconPosition]} />
        <Text style={styles.softwareEngineeringLeague}>
          Stanford Dorm league
        </Text>
        <Text style={[styles.standings2, styles.standings2Typo]}>
          Standings
        </Text>
        <Text style={[styles.waiverWire2, styles.standings2Typo]}>
          Waiver Wire
        </Text>
        <Text style={[styles.leagueSettings2, styles.leagueTypo]}>
          League Settings
        </Text>
      </Pressable>
      <Text style={[styles.draft102023800pm, styles.jakesTeam1Typo]}>
        Draft: 10/20/23 8:00pm
      </Text>
      <View style={[styles.cancelButton, styles.joinALeagueLayout]}>
        <Image
          style={styles.cancelButtonChild}
          resizeMode="cover"
          source={require("./assets/rectangle-11.png")}
        />
        <Text style={[styles.joinALeague, styles.joinALeagueLayout]}>
          Join a league
        </Text>
      </View>
<<<<<<< Updated upstream
      <Image
        style={[styles.tabBarIcon, styles.tabBarIconPosition]}
        resizeMode="cover"
        source={require("./assets/tab-bar.png")}
      />
=======
>>>>>>> Stashed changes
    </View>
  );
};

const styles = StyleSheet.create({
  leagueLayout: {
    height: 114,
    width: 294,
  },
  tabBarIconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  jakesTeam1Typo: {
    height: 21,
    width: 271,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  standingsPosition: {
    top: 82,
    position: "absolute",
  },
  standings1Typo: {
    height: 17,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    textDecoration: "underline",
    fontSize: FontSize.size_smi,
  },
  standings2Typo: {
    top: 80,
    height: 17,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    textDecoration: "underline",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  leagueTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    textDecoration: "underline",
    fontSize: FontSize.size_smi,
  },
  joinALeagueLayout: {
    height: 48,
    width: 276,
    position: "absolute",
  },
  myLeaugesHomeChild: {
    top: 147,
    left: 32,
    backgroundColor: Color.darkslateblue,
    width: 327,
    height: 648,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  league1Child: {
    backgroundColor: Color.gainsboro,
    height: 114,
    width: 294,
    borderRadius: Border.br_8xs,
  },
  leagueSettings: {
    left: 182,
    top: 79,
    position: "absolute",
  },
  softwareEngineeringLeague: {
    top: 11,
    fontSize: FontSize.size_xl,
    left: 15,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    textDecoration: "underline",
    position: "absolute",
  },
  jakesTeam1: {
    top: 41,
    left: 17,
  },
  standings1: {
    width: 61,
  },
  standings: {
    left: 14,
  },
  waiverWire1: {
    width: 81,
  },
  waiverWire: {
    left: 87,
  },
  league1: {
    top: 167,
    left: 49,
    width: 294,
    position: "absolute",
  },
  standings2: {
    width: 61,
    left: 15,
    top: 80,
  },
  waiverWire2: {
    left: 88,
    width: 91,
  },
  leagueSettings2: {
    top: 76,
    left: 183,
    position: "absolute",
  },
  league2: {
    top: 308,
    left: 49,
    width: 294,
    position: "absolute",
  },
  draft102023800pm: {
    top: 349,
    left: 64,
  },
  cancelButtonChild: {
    top: -20,
    left: -24,
    borderRadius: Border.br_41xl,
    width: 324,
    height: 96,
    position: "absolute",
  },
  joinALeague: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    width: 276,
    fontSize: FontSize.size_xl,
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  cancelButton: {
    top: 706,
    left: 57,
  },
  tabBarIcon: {
    width: 390,
    height: 105,
  },
  myLeaugesHome: {
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

export default MyLeaugesHome;
