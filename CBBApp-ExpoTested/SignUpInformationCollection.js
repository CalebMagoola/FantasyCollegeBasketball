import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "./GlobalStyles";

const SignUpInformationCollection = () => {
  return (
    <View style={styles.signUpInformationCollection}>
      <View
        style={[styles.signUpInformationCollectionChild, styles.signLayout]}
      />
      <View
        style={[styles.signUpInformationCollectionItem, styles.signLayout]}
      />
      <Text style={[styles.enterEmail, styles.enterTypo]}>enter email:</Text>
      <View
        style={[styles.signUpInformationCollectionInner, styles.signLayout]}
      />
      <Text style={[styles.enterPassword, styles.enterTypo]}>
        enter password:
      </Text>
      <View style={[styles.lineView, styles.signLayout]} />
      <Text style={[styles.confirmPassword, styles.enterTypo]}>
        confirm password:
      </Text>
      <Text style={[styles.enterUsername, styles.enterTypo]}>
        enter username:
      </Text>
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="cover"
        source={require("./assets/arrowleft1.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("./assets/rectangle-1.png")}
      />
      <Text style={styles.signUp}>Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    height: 2,
    width: 265,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    left: 62,
    position: "absolute",
  },
  enterTypo: {
    opacity: 0.8,
    color: Color.white,
    fontSize: FontSize.size_lg,
    left: 70,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  signUpInformationCollectionChild: {
    top: 216,
  },
  signUpInformationCollectionItem: {
    top: 301,
  },
  enterEmail: {
    top: 187,
  },
  signUpInformationCollectionInner: {
    top: 386,
  },
  enterPassword: {
    top: 357,
  },
  lineView: {
    top: 478,
  },
  confirmPassword: {
    top: 449,
  },
  enterUsername: {
    top: 272,
  },
  arrowLeftIcon: {
    top: 33,
    left: 23,
    width: 44,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 577,
    left: 60,
    borderRadius: Border.br_41xl,
    width: 284,
    height: 95,
    position: "absolute",
  },
  signUp: {
    marginLeft: -88,
    top: 588,
    left: "50%",
    fontSize: FontSize.size_11xl,
    color: Color.darkslateblue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 190,
    height: 65,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  signUpInformationCollection: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignUpInformationCollection;
