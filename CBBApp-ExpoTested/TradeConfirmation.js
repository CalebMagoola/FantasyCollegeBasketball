import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";

const TradeConfirmation = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.tradeConfirmation, styles.iconLayout]}>
      <View style={[styles.tradeConfirmationChild, styles.tradeLayout]} />
      <View style={[styles.tradeConfirmationItem, styles.tradeLayout]} />
      <View
        style={[styles.tradeConfirmationInner, styles.rectangleViewLayout]}
      />
      <View style={[styles.rectangleView, styles.arrowLeftPosition]} />
      <Text style={[styles.tradeAway, styles.tradeTypo1]}>Trade Away:</Text>
      <Text style={[styles.confirmTheTrade, styles.tradeTypo]}>
        Confirm the Trade Request
      </Text>
      <Text style={[styles.tradeFor, styles.tradeTypo1]}>Trade For:</Text>
      <Pressable
        style={[styles.arrowLeft, styles.arrowLeftPosition]}
        onPress={() => navigation.navigate("TradeOtherTeam")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("./assets/arrowleft.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.advanceButton, styles.advanceLayout]}
        onPress={() => navigation.navigate("SpecificTeamHome1")}
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
      <Image
        style={[styles.tabBarIcon, styles.advancePosition]}
        resizeMode="cover"
        source={require("./assets/tab-bar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  tradeLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 113,
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  arrowLeftPosition: {
    left: 62,
    position: "absolute",
  },
  tradeTypo1: {
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    left: 80,
    position: "absolute",
  },
  tradeTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
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
  tradeConfirmationChild: {
    top: 120,
    left: 32,
    backgroundColor: Color.darkslateblue,
    width: 327,
    height: 705,
  },
  tradeConfirmationItem: {
    top: 130,
    backgroundColor: Color.gainsboro,
    width: 294,
    height: 626,
    left: 48,
  },
  tradeConfirmationInner: {
    top: 249,
    left: 61,
    width: 270,
    position: "absolute",
  },
  rectangleView: {
    top: 400,
    width: 269,
    height: 113,
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  tradeAway: {
    top: 411,
  },
  confirmTheTrade: {
    top: 187,
    left: 49,
    width: 293,
    height: 37,
    position: "absolute",
  },
  tradeFor: {
    top: 260,
  },
  icon: {
    height: "100%",
  },
  arrowLeft: {
    top: 143,
    width: 32,
    height: 32,
  },
  advanceButtonChild: {
    width: 179,
  },
  advance: {
    height: 31,
    width: 131,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  advanceButton: {
    left: 211,
    top: 776,
  },
  cancelButtonChild: {
    width: 194,
  },
  cancelTrade: {
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  cancelButton: {
    top: 776,
    left: 48,
  },
  tabBarIcon: {
    width: 390,
    height: 105,
    position: "absolute",
  },
  tradeConfirmation: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    height: 844,
  },
});

export default TradeConfirmation;
