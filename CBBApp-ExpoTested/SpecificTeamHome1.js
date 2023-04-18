import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const SpecificTeamHome1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.specificTeamHome1}>
      <View style={styles.specificTeamHome1Child} />
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
      <Image
        style={[styles.emojiBasketballAndHoop, styles.emojiLayout]}
        resizeMode="cover"
        source={require("./assets/-emoji-basketball-and-hoop1.png")}
      />
      <View style={[styles.specificTeamHome1Item, styles.specificPosition]} />
      <Text style={[styles.b, styles.bTypo]}>B</Text>
      <View
        style={[styles.specificTeamHome1Inner, styles.specificChildLayout1]}
      />
      <Text style={[styles.b1, styles.cTypo]}>B</Text>
      <View style={[styles.lineView, styles.specificChildLayout]} />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("./assets/line-8.png")}
      />
      <Text style={[styles.c, styles.cPosition]}>C</Text>
      <Text
        style={[styles.softwareEngineeringLeague, styles.jakesTeamTypo]}
      >{`Software engineering league
 6-0                          1st place`}</Text>
      <Image
        style={[styles.emojiBasketballAndHoop1, styles.emojiLayout]}
        resizeMode="cover"
        source={require("./assets/-emoji-basketball-and-hoop1.png")}
      />
      <Text style={[styles.jakesTeam, styles.jakesTeamTypo]}>Jake’s Team</Text>
      <View style={styles.specificTeamHome1Child1} />
      <View
        style={[styles.specificTeamHome1Child2, styles.specificChildLayout]}
      />
      <View
        style={[styles.specificTeamHome1Child3, styles.specificChildLayout]}
      />
      <Image
        style={[styles.specificTeamHome1Child4, styles.lineIconLayout]}
        resizeMode="cover"
        source={require("./assets/line-10.png")}
      />
      <Text style={[styles.b2, styles.cTypo]}>B</Text>
      <View style={[styles.specificTeamHome1Child5, styles.b3Position]} />
      <Text style={[styles.b3, styles.b3Position]}>B</Text>
      <View style={[styles.specificTeamHome1Child6, styles.b4Position]} />
      <Text style={[styles.b4, styles.b4Position]}>B</Text>
      <View
        style={[styles.specificTeamHome1Child7, styles.specificChildLayout1]}
      />
      <View style={[styles.specificTeamHome1Child8, styles.cPosition]} />
      <Text style={[styles.pg, styles.pgTypo]}>PG</Text>
      <Text style={[styles.sg, styles.pgTypo]}>SG</Text>
      <Text style={[styles.sf, styles.sfPosition]}>SF</Text>
      <Text style={[styles.pf, styles.bTypo]}>PF</Text>
      <Pressable
        style={styles.markArmstrong}
        onPress={() => navigation.navigate("TeamPlayerDetails")}
      >
        <Text style={[styles.markArmstrong1, styles.bTypo2]}>
          Mark Armstrong
        </Text>
      </Pressable>
      <Pressable
        style={[styles.addDrop, styles.addLayout1]}
        onPress={() => navigation.navigate("TeamLeaguePlayerPool")}
      >
        <Image
          style={[styles.addDropChild, styles.addPosition1]}
          resizeMode="cover"
          source={require("./assets/rectangle-22.png")}
        />
        <Text style={[styles.addDrop1, styles.addDrop1Typo]}>
          Add / Drop Players
        </Text>
      </Pressable>
      <Pressable
        style={[styles.addDrop2, styles.addLayout]}
        onPress={() => navigation.navigate("TradeMyTeam")}
      >
        <Image
          style={[styles.addDropItem, styles.addPosition1]}
          resizeMode="cover"
          source={require("./assets/rectangle-23.png")}
        />
        <Text style={[styles.proposeATrade, styles.addLayout]}>
          Propose a Trade
        </Text>
      </Pressable>
      <View style={[styles.addDrop3, styles.addLayout]}>
        <Image
          style={[styles.addDropItem, styles.addPosition1]}
          resizeMode="cover"
          source={require("./assets/rectangle-23.png")}
        />
        <Text style={[styles.proposeATrade, styles.addLayout]}>
          Pending Trades
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emojiLayout: {
    height: 62,
    width: 62,
    position: "absolute",
  },
  specificPosition: {
    left: 48,
    position: "absolute",
  },
  bTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  bTypo2: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 10,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  specificChildLayout1: {
    height: 1,
    width: 301,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
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
    left: 61,
  },
  specificChildLayout: {
    width: 298,
    left: 51,
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
  jakesTeamTypo: {
    left: 142,
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
  b3Position: {
    top: 657,
    position: "absolute",
  },
  b4Position: {
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
  addLayout1: {
    height: 44,
    width: 119,
    position: "absolute",
  },
  addPosition1: {
    borderRadius: Border.br_41xl,
    left: -24,
    top: -20,
    position: "absolute",
  },
  addDrop1Typo: {
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    top: 0,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 45,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  addLayout: {
    height: 21,
    width: 106,
    position: "absolute",
  },
  specificTeamHome1Child: {
    top: 120,
    left: 32,
    backgroundColor: Color.darkslateblue,
    width: 327,
    height: 705,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  emojiBasketballAndHoop: {
    top: 146,
    left: 62,
  },
  specificTeamHome1Item: {
    top: 130,
    backgroundColor: Color.gainsboro,
    width: 294,
    height: 681,
    borderRadius: Border.br_8xs,
  },
  b: {
    height: 54,
    width: 8,
    left: 61,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
    top: 757,
  },
  specificTeamHome1Inner: {
    top: 811,
    left: 48,
    position: "absolute",
  },
  b1: {
    top: 555,
    position: "absolute",
    width: 8,
  },
  lineView: {
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
  softwareEngineeringLeague: {
    top: 173,
    width: 136,
    height: 49,
    fontSize: FontSize.size_3xs,
    left: 142,
  },
  emojiBasketballAndHoop1: {
    top: 160,
    left: 67,
  },
  jakesTeam: {
    top: 153,
    fontSize: FontSize.size_lg,
    width: 180,
    height: 25,
  },
  specificTeamHome1Child1: {
    top: 300,
    left: 44,
    borderTopWidth: 2,
    width: 299,
    height: 2,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    position: "absolute",
  },
  specificTeamHome1Child2: {
    top: 351,
    position: "absolute",
  },
  specificTeamHome1Child3: {
    top: 555,
    position: "absolute",
  },
  specificTeamHome1Child4: {
    top: 604,
  },
  b2: {
    top: 607,
    width: 8,
    position: "absolute",
  },
  specificTeamHome1Child5: {
    left: 49,
    height: 1,
    width: 301,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
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
  specificTeamHome1Child6: {
    width: 303,
    left: 51,
    top: 707,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
  },
  b4: {
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
  specificTeamHome1Child7: {
    top: 757,
    left: 48,
    position: "absolute",
  },
  specificTeamHome1Child8: {
    width: 298,
    left: 51,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
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
  addDropChild: {
    width: 167,
    height: 92,
  },
  addDrop1: {
    height: 44,
    width: 119,
    position: "absolute",
  },
  addDrop: {
    top: 241,
    left: 64,
  },
  addDropItem: {
    width: 154,
    height: 69,
  },
  proposeATrade: {
    justifyContent: "center",
    textAlign: "center",
    left: 0,
    top: 0,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
  },
  addDrop2: {
    top: 235,
    left: 216,
    width: 106,
  },
  addDrop3: {
    top: 268,
    left: 216,
    width: 106,
  },
  tabBarIcon: {
    width: 390,
    height: 105,
    left: 0,
    top: 0,
    position: "absolute",
  },
  specificTeamHome1: {
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

export default SpecificTeamHome1;
