import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const TradeMyTeam = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tradeMyTeam}>
      <View style={styles.tradeMyTeamChild} />
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
      <View style={[styles.tradeMyTeamItem, styles.tradeMyTeamItemPosition]} />
      <Text style={[styles.b, styles.bTypo]}>B</Text>
      <View style={[styles.tradeMyTeamInner, styles.tradeChildBorder]} />
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
      <Text style={[styles.selectThePlayers, styles.advanceTypo]}>
        Select the players from your team you wish to trade
      </Text>
      <View style={styles.lineView} />
      <View style={[styles.tradeMyTeamChild1, styles.tradeChildBorder]} />
      <View style={[styles.tradeMyTeamChild2, styles.tradeChildBorder]} />
      <Image
        style={[styles.tradeMyTeamChild3, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("./assets/line-10.png")}
      />
      <Text style={[styles.b1, styles.bTypo]}>B</Text>
      <View style={[styles.tradeMyTeamChild4, styles.b2Position]} />
      <Text style={[styles.b2, styles.b2Position]}>B</Text>
      <View style={[styles.tradeMyTeamChild5, styles.b3Position]} />
      <Text style={[styles.b3, styles.b3Position]}>B</Text>
      <View style={[styles.tradeMyTeamChild6, styles.cPosition]} />
      <Text style={[styles.pg, styles.pgTypo]}>PG</Text>
      <Text style={[styles.sg, styles.pgTypo]}>SG</Text>
      <Text style={[styles.sf, styles.sfPosition]}>SF</Text>
      <Text style={[styles.pf, styles.pfTypo]}>PF</Text>
      <Pressable
        style={styles.markArmstrong}
        onPress={() => navigation.navigate("TeamPlayerDetails")}
      >
        <Text style={[styles.markArmstrong1, styles.pfTypo]}>
          Mark Armstrong
        </Text>
      </Pressable>
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
        style={[styles.vectorIcon, styles.vectorIconLayout]}
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
      <Pressable
        style={[styles.advanceButton, styles.advanceLayout]}
        onPress={() => navigation.navigate("TradeOtherTeam")}
      >
        <Image
          style={[styles.advanceButtonChild, styles.buttonChildPosition]}
          resizeMode="cover"
          source={require("./assets/rectangle-111.png")}
        />
        <Text style={[styles.advance, styles.advancePosition]}>Advance</Text>
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
<<<<<<< Updated upstream
      <Image
        style={[styles.tabBarIcon, styles.advancePosition]}
        resizeMode="cover"
        source={require("./assets/tab-bar.png")}
      />
=======
>>>>>>> Stashed changes
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
    position: "absolute",
    overflow: "hidden",
  },
  tradeMyTeamItemPosition: {
    width: 294,
    left: 48,
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
  advanceTypo: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_lg,
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
    lineHeight: 24,
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
    borderRadius: Border.br_41xl,
    left: -24,
    top: -20,
    position: "absolute",
  },
  advancePosition: {
    left: 0,
    top: 0,
  },
  cancelLayout: {
    width: 146,
    height: 31,
    position: "absolute",
  },
  tradeMyTeamChild: {
    top: 120,
    left: 32,
    backgroundColor: Color.darkslateblue,
    width: 327,
    height: 705,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  vectorIcon: {
    top: "43.36%",
    bottom: "54.27%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  tradeMyTeamItem: {
    top: 130,
    backgroundColor: Color.gainsboro,
    height: 627,
    borderRadius: Border.br_8xs,
  },
  b: {
    width: 8,
    height: 50,
    top: 555,
    position: "absolute",
  },
  tradeMyTeamInner: {
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
    top: 314,
    left: 294,
    width: 24,
    height: 24,
    position: "absolute",
  },
  selectThePlayers: {
    top: 149,
    height: 116,
    width: 294,
    left: 48,
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
  tradeMyTeamChild1: {
    top: 351,
    width: 298,
    height: 1,
    borderTopWidth: 1,
    left: 51,
    position: "absolute",
  },
  tradeMyTeamChild2: {
    width: 298,
    height: 1,
    borderTopWidth: 1,
    left: 51,
    top: 555,
    position: "absolute",
  },
  tradeMyTeamChild3: {
    top: 604,
  },
  b1: {
    top: 607,
    width: 8,
    height: 50,
    position: "absolute",
  },
  tradeMyTeamChild4: {
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
  tradeMyTeamChild5: {
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
  tradeMyTeamChild6: {
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
  markArmstrong1: {
    width: 83,
    height: 14,
  },
  markArmstrong: {
    left: 94,
    top: 319,
    position: "absolute",
  },
  vectorIcon1: {
    top: "49.29%",
    bottom: "48.34%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon2: {
    top: "55.57%",
    bottom: "42.06%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon3: {
    top: "61.61%",
    bottom: "36.02%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon4: {
    top: "67.54%",
    bottom: "30.09%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon6: {
    top: "79.62%",
    bottom: "18.01%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon7: {
    top: "73.7%",
    right: "18.72%",
    bottom: "23.93%",
    left: "76.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  vectorIcon8: {
    top: "85.55%",
    bottom: "12.09%",
    left: "75.9%",
    right: "18.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.13%",
    height: "2.37%",
  },
  advanceButtonChild: {
    width: 179,
  },
  advance: {
    height: 31,
    width: 131,
    position: "absolute",
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
  },
  advanceButton: {
    left: 212,
    top: 776,
  },
  cancelButtonChild: {
    width: 194,
  },
  cancelTrade: {
    left: 0,
    top: 0,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
  },
  cancelButton: {
    top: 776,
    left: 49,
  },
  tabBarIcon: {
    width: 390,
    height: 105,
    position: "absolute",
  },
  tradeMyTeam: {
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

export default TradeMyTeam;
