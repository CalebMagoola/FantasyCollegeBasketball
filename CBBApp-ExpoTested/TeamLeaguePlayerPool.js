import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";

const TeamLeaguePlayerPool = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.teamLeaguePlayerPool, styles.iconLayout]}>
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
      <View style={[styles.teamLeaguePlayerPoolChild, styles.teamLayout]} />
      <View style={[styles.teamLeaguePlayerPoolItem, styles.teamLayout]} />
      <Text style={[styles.b, styles.bTypo]}>B</Text>
      <View
        style={[styles.teamLeaguePlayerPoolInner, styles.teamChildLayout1]}
      />
      <Text style={[styles.b1, styles.bTypo]}>B</Text>
      <View style={[styles.lineView, styles.teamChildLayout1]} />
      <Text style={[styles.pg, styles.pgTypo]}>PG</Text>
      <View
        style={[styles.teamLeaguePlayerPoolChild1, styles.teamChildLayout1]}
      />
      <View
        style={[styles.teamLeaguePlayerPoolChild2, styles.teamChildLayout1]}
      />
      <Text style={[styles.c, styles.cTypo]}>C</Text>
      <View style={styles.teamLeaguePlayerPoolChild3} />
      <View
        style={[styles.teamLeaguePlayerPoolChild4, styles.teamChildLayout1]}
      />
      <View
        style={[styles.teamLeaguePlayerPoolChild5, styles.teamChildLayout]}
      />
      <View
        style={[styles.teamLeaguePlayerPoolChild6, styles.teamChildLayout1]}
      />
      <Text style={[styles.pg1, styles.pgTypo]}>PG</Text>
      <View
        style={[styles.teamLeaguePlayerPoolChild7, styles.teamChildLayout1]}
      />
      <Text style={[styles.b2, styles.cTypo]}>B</Text>
      <View
        style={[styles.teamLeaguePlayerPoolChild8, styles.teamChildLayout]}
      />
      <Text style={[styles.b3, styles.cTypo]}>B</Text>
      <View
        style={[styles.teamLeaguePlayerPoolChild9, styles.teamChildLayout1]}
      />
      <View
        style={[styles.teamLeaguePlayerPoolChild10, styles.teamChildLayout1]}
      />
      <Text style={[styles.sg, styles.sgTypo]}>SG</Text>
      <Text style={[styles.sg1, styles.sgTypo]}>SG</Text>
      <Text style={[styles.sf, styles.cTypo]}>SF</Text>
      <Text style={styles.pf}>PF</Text>
      <Text style={[styles.playerPool, styles.sortByFlexBox]}>Player Pool</Text>
      <Text style={[styles.sortBy, styles.sortByFlexBox]}>Sort By:</Text>
      <Text style={[styles.positionAllContainer, styles.containerTypo]}>
        <Text style={styles.position}>Position:</Text>
        <Text style={styles.all}> All | PG | SG | SF | PF | C</Text>
      </Text>
      <Text
        style={[styles.availabilityUnclaimedContainer, styles.containerTypo]}
      >
        <Text style={styles.position}>{`Availability: `}</Text>
        <Text style={styles.all}>
          <Text style={styles.unclaimed}>Unclaimed</Text> | All
        </Text>
      </Text>
      <Pressable
        style={[styles.justinMoore, styles.justinMoorePosition]}
        onPress={() => navigation.navigate("TeamPlayerDetails")}
      >
        <Text style={styles.justinMoore1Typo}>Justin Moore</Text>
      </Pressable>
      <Text style={[styles.calebDaniels, styles.justinMoore1Typo]}>
        Caleb Daniels
      </Text>
      <Text style={[styles.camWhitmore, styles.justinMoorePosition]}>
        Cam Whitmore
      </Text>
      <Text style={[styles.brandonSlater, styles.justinMoorePosition]}>
        Brandon Slater
      </Text>
      <Text style={[styles.ericDixon, styles.pgTypo]}>Eric Dixon</Text>
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("./assets/rectangle-2.png")}
        />
        <Text style={[styles.bestPpg, styles.bestPpgPosition]}>Best PPG</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("./assets/vector.png")}
        />
      </View>
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("SpecificTeamHome1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("./assets/arrowleft.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  teamLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  bTypo: {
    height: 54,
    width: 8,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    left: 58,
    position: "absolute",
  },
  teamChildLayout1: {
    height: 1,
    width: 358,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    left: 18,
    position: "absolute",
  },
  pgTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  cTypo: {
    height: 50,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    left: 58,
    position: "absolute",
  },
  teamChildLayout: {
    width: 355,
    left: 21,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    position: "absolute",
  },
  sgTypo: {
    width: 15,
    height: 50,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    left: 58,
    position: "absolute",
  },
  sortByFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  containerTypo: {
    left: 183,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  justinMoorePosition: {
    left: 93,
    position: "absolute",
  },
  justinMoore1Typo: {
    height: 14,
    width: 69,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  bestPpgPosition: {
    top: 0,
    position: "absolute",
  },
  teamLeaguePlayerPoolChild: {
    top: 126,
    backgroundColor: Color.darkslateblue,
    width: 357,
    height: 699,
    left: 18,
    borderRadius: Border.br_8xs,
  },
  teamLeaguePlayerPoolItem: {
    top: 136,
    left: 27,
    backgroundColor: Color.gainsboro,
    width: 339,
    height: 676,
  },
  b: {
    top: 717,
  },
  teamLeaguePlayerPoolInner: {
    top: 765,
  },
  b1: {
    top: 765,
  },
  lineView: {
    top: 813,
  },
  pg: {
    top: 528,
    left: 58,
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  teamLeaguePlayerPoolChild1: {
    top: 361,
  },
  teamLeaguePlayerPoolChild2: {
    top: 410,
  },
  c: {
    top: 465,
    width: 8,
    height: 50,
  },
  teamLeaguePlayerPoolChild3: {
    top: 260,
    left: 26,
    borderTopWidth: 2,
    width: 345,
    height: 2,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    position: "absolute",
  },
  teamLeaguePlayerPoolChild4: {
    top: 311,
  },
  teamLeaguePlayerPoolChild5: {
    top: 515,
  },
  teamLeaguePlayerPoolChild6: {
    top: 565,
  },
  pg1: {
    top: 580,
    left: 58,
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  teamLeaguePlayerPoolChild7: {
    top: 615,
  },
  b2: {
    top: 617,
    width: 8,
    height: 50,
  },
  teamLeaguePlayerPoolChild8: {
    top: 665,
  },
  b3: {
    top: 667,
    width: 8,
    height: 50,
  },
  teamLeaguePlayerPoolChild9: {
    top: 715,
  },
  teamLeaguePlayerPoolChild10: {
    top: 465,
  },
  sg: {
    top: 261,
  },
  sg1: {
    top: 311,
  },
  sf: {
    width: 13,
    top: 361,
  },
  pf: {
    top: 413,
    width: 14,
    height: 52,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    left: 58,
    position: "absolute",
  },
  playerPool: {
    top: 154,
    left: 50,
    fontSize: FontSize.size_11xl,
    width: 300,
    height: 30,
  },
  sortBy: {
    top: 217,
    left: 41,
    width: 39,
    height: 15,
    fontSize: FontSize.size_3xs,
  },
  position: {
    fontSize: FontSize.size_3xs,
  },
  all: {
    fontSize: FontSize.size_5xs,
  },
  positionAllContainer: {
    top: 198,
  },
  unclaimed: {
    textDecoration: "underline",
  },
  availabilityUnclaimedContainer: {
    top: 223,
  },
  justinMoore: {
    top: 279,
  },
  calebDaniels: {
    top: 329,
    left: 93,
    position: "absolute",
  },
  camWhitmore: {
    top: 374,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  brandonSlater: {
    top: 428,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  ericDixon: {
    top: 478,
    left: 94,
    position: "absolute",
  },
  groupChild: {
    top: -19,
    left: -24,
    borderRadius: Border.br_41xl,
    width: 125,
    height: 69,
    position: "absolute",
  },
  bestPpg: {
    left: 14,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    top: 0,
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
  },
  vectorIcon: {
    height: "23.96%",
    width: "6.57%",
    top: "37.5%",
    right: "11.95%",
    bottom: "38.54%",
    left: "81.48%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    top: 213,
    left: 85,
    width: 77,
    height: 24,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft: {
    left: 29,
    top: 145,
    width: 32,
    height: 32,
    position: "absolute",
  },
  tabBarIcon: {
    left: 0,
    width: 390,
    height: 105,
  },
  teamLeaguePlayerPool: {
    backgroundColor: Color.midnightblue,
    flex: 1,
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

export default TeamLeaguePlayerPool;
