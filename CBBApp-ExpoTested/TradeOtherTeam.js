import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const TradeOtherTeam = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.tradeOtherTeam, styles.iconLayout]}>
      <View style={styles.tradeOtherTeamChild} />
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
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <View
        style={[styles.tradeOtherTeamItem, styles.selectPlayersFromLayout]}
      />
      <Text style={[styles.b, styles.bTypo]}>B</Text>
      <View style={[styles.tradeOtherTeamInner, styles.tradeChildBorder]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("./assets/line-8.png")}
      />
      <Text style={[styles.c, styles.cPosition]}>C</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("./assets/group-2.png")}
      />
      <Text style={[styles.selectPlayersFrom, styles.teamFlexBox]}>
        Select players from a different team to receive
      </Text>
      <View style={styles.lineView} />
      <View style={[styles.tradeOtherTeamChild1, styles.tradeChildBorder]} />
      <View style={[styles.tradeOtherTeamChild2, styles.tradeChildBorder]} />
      <Image
        style={[styles.tradeOtherTeamChild3, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("./assets/line-10.png")}
      />
      <Text style={[styles.b1, styles.bTypo]}>B</Text>
      <View style={[styles.tradeOtherTeamChild4, styles.b2Position]} />
      <Text style={[styles.b2, styles.b2Position]}>B</Text>
      <View style={[styles.tradeOtherTeamChild5, styles.b3Position]} />
      <Text style={[styles.b3, styles.b3Position]}>B</Text>
      <View style={[styles.tradeOtherTeamChild6, styles.cPosition]} />
      <Text style={[styles.pg, styles.pgTypo]}>PG</Text>
      <Text style={[styles.sg, styles.pgTypo]}>SG</Text>
      <Text style={[styles.sf, styles.sfPosition]}>SF</Text>
      <Text style={[styles.pf, styles.pfTypo]}>PF</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector1.png")}
      />
      <Text style={[styles.team, styles.teamFlexBox]}>Team:</Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("./assets/rectangle-21.png")}
      />
      <Pressable
        style={styles.jordanLongino}
        onPress={() => navigation.navigate("TeamPlayerDetails")}
      >
        <Text style={[styles.jordanLongino1, styles.pfTypo2]}>
          Jordan Longino
        </Text>
      </Pressable>
      <Text style={[styles.calebsTeam, styles.teamFlexBox]}>Caleb’s Team</Text>
      {/* <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("./assets/vector2.png")}
      /> */}
      <Pressable
        style={styles.arrowLeft}
        onPress={() => navigation.navigate("TradeMyTeam")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("./assets/arrowleft.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.advanceButton, styles.advanceLayout]}
        onPress={() => navigation.navigate("TradeConfirmation")}
      >
        <Image
          style={[styles.advanceButtonChild, styles.buttonChildPosition]}
          resizeMode="cover"
          source={require("./assets/rectangle-111.png")}
        />
        <Text style={[styles.advance, styles.advanceLayout]}>Advance</Text>
      </Pressable>
      <Pressable
        style={[styles.cancelButton, styles.cancelLayout]}
        onPress={() => navigation.navigate("SpecificTeamHome1")}
      >
        <Image
          style={[styles.cancelButtonChild, styles.buttonChildPosition]}
          resizeMode="cover"
          source={require("./assets/rectangle-112.png")}
        />
        <Text style={[styles.cancelTrade, styles.cancelLayout]}>
          Cancel Trade
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
  advancePosition: {
    left: 0,
    top: 0,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  selectPlayersFromLayout: {
    width: 294,
    position: "absolute",
  },
  bTypo: {
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
    left: 61,
  },
  tradeChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
  },
  lineIconLayout: {
    height: 3,
    width: 296,
    left: 52,
    position: "absolute",
  },
  cPosition: {
    top: 505,
    position: "absolute",
  },
  teamFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
  },
  b2Position: {
    top: 657,
    position: "absolute",
  },
  b3Position: {
    top: 707,
    position: "absolute",
  },
  pgTypo: {
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
    left: 61,
    position: "absolute",
  },
  sfPosition: {
    top: 401,
    position: "absolute",
  },
  pfTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  pfTypo2: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 13,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  advanceLayout: {
    height: 31,
    width: 131,
    position: "absolute",
  },
  buttonChildPosition: {
    height: 79,
    left: -24,
    top: -20,
    borderRadius: Border.br_41xl,
    position: "absolute",
  },
  cancelLayout: {
    width: 146,
    height: 31,
    position: "absolute",
  },
  tradeOtherTeamChild: {
    top: 118,
    left: 32,
    backgroundColor: Color.darkslateblue,
    width: 327,
    height: 705,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  tabBarIcon: {
    width: 390,
    height: 105,
    position: "absolute",
  },
  vectorIcon: {
    top: "41%",
    bottom: "54.27%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  tradeOtherTeamItem: {
    top: 130,
    backgroundColor: Color.gainsboro,
    height: 627,
    left: 48,
    borderRadius: Border.br_8xs,
  },
  b: {
    width: 8,
    height: 50,
    top: 555,
    position: "absolute",
  },
  tradeOtherTeamInner: {
    width: 298,
    height: 1,
    borderTopWidth: 1,
    left: 51,
    top: 401,
    position: "absolute",
  },
  lineIcon: {
    top: 450,
  },
  c: {
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
    left: 61,
    width: 8,
  },
  groupIcon: {
    top: 364,
    left: 294,
    width: 24,
    height: 24,
    position: "absolute",
  },
  selectPlayersFrom: {
    top: 187,
    height: 48,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    left: 49,
    width: 294,
    position: "absolute",
  },
  lineView: {
    top: 300,
    left: 44,
    borderTopWidth: 2,
    width: 299,
    height: 2,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    position: "absolute",
  },
  tradeOtherTeamChild1: {
    top: 351,
    width: 298,
    height: 1,
    borderTopWidth: 1,
    left: 51,
    position: "absolute",
  },
  tradeOtherTeamChild2: {
    width: 298,
    height: 1,
    borderTopWidth: 1,
    left: 51,
    top: 555,
    position: "absolute",
  },
  tradeOtherTeamChild3: {
    top: 604,
  },
  b1: {
    top: 607,
    width: 8,
    height: 50,
    position: "absolute",
  },
  tradeOtherTeamChild4: {
    width: 301,
    left: 49,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
  },
  b2: {
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
    left: 61,
    width: 8,
  },
  tradeOtherTeamChild5: {
    width: 303,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    left: 51,
    top: 707,
  },
  b3: {
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
    left: 61,
    width: 8,
  },
  tradeOtherTeamChild6: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    width: 298,
    left: 51,
  },
  pg: {
    top: 301,
  },
  sg: {
    top: 351,
  },
  sf: {
    width: 13,
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
    left: 61,
  },
  pf: {
    top: 453,
    width: 14,
    height: 52,
    left: 61,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  vectorIcon1: {
    top: "47%",
    bottom: "48.34%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon2: {
    top: "53%",
    bottom: "42.06%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon3: {
    top: "59%",
    bottom: "36.02%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon4: {
    top: "64%",
    bottom: "30.09%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon5: {
    top: "35.8%",
    bottom: "60.19%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon6: {
    top: "75%",
    bottom: "18.01%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon7: {
    top: "70%",
    right: "18.72%",
    bottom: "23.93%",
    left: "76.15%",
    width: "5.13%",
    height: "2.37%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon8: {
    top: "81%",
    bottom: "12.09%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  team: {
    top: 250,
    left: 56,
    width: 94,
    height: 26,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    position: "absolute",
  },
  rectangleIcon: {
    top: 233,
    left: 141,
    width: 198,
    height: 69,
    borderRadius: Border.br_41xl,
    position: "absolute",
  },
  jordanLongino1: {
    width: 83,
    height: 14,
  },
  jordanLongino: {
    left: 99,
    top: 369,
    position: "absolute",
  },
  calebsTeam: {
    top: 253,
    left: 165,
    fontSize: 14,
    width: 132,
    height: 21,
    position: "absolute",
  },
  vectorIcon9: {
    height: "0.1%",
    width: "2.05%",
    top: "30.81%",
    right: "24.1%",
    bottom: "68.25%",
    left: "73.85%",
  },
  icon: {
    height: "100%",
  },
  arrowLeft: {
    left: 62,
    top: 143,
    width: 32,
    height: 32,
    position: "absolute",
  },
  advanceButtonChild: {
    width: 179,
  },
  advance: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 0,
    top: 0,
  },
  advanceButton: {
    left: 211,
    top: 776,
  },
  cancelButtonChild: {
    width: 194,
  },
  cancelTrade: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 0,
    top: 0,
  },
  cancelButton: {
    top: 776,
    left: 48,
  },
  tradeOtherTeam: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    height: 844,
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

export default TradeOtherTeam;
