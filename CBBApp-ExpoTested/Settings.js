import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Image
        style={[styles.tabBarIcon, styles.tabBarIconPosition]}
        resizeMode="cover"
        source={require("../assets/tab-bar.png")}
      />
      <View style={[styles.changePassword, styles.changeLayout1]}>
        <View style={[styles.changePasswordChild, styles.changeLayout1]} />
        <View style={[styles.changePasswordItem, styles.changeLayout]} />
        <View style={[styles.changePasswordInner, styles.changeLayout]} />
        <Text style={[styles.confirmPassword, styles.passwordTypo]}>
          confirm password:
        </Text>
        <Text style={[styles.enterNewPassword, styles.passwordTypo]}>
          enter new password:
        </Text>
        <Text style={[styles.changePassword1, styles.signOutTypo]}>
          Change Password
        </Text>
      </View>
      <Pressable
        style={[styles.signUpButton, styles.signLayout]}
        onPress={() => navigation.navigate("HomePostLaunch")}
      >
        <Image
          style={styles.signUpButtonChild}
          resizeMode="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={[styles.signOut, styles.signLayout]}>{`Sign out `}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarIconPosition: {
    left: 0,
    top: 0,
  },
  changeLayout1: {
    height: 263,
    width: 327,
    position: "absolute",
  },
  changeLayout: {
    height: 2,
    width: 265,
    borderTopWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    position: "absolute",
  },
  passwordTypo: {
    opacity: 0.8,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  signOutTypo: {
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
  },
  signLayout: {
    height: 47,
    position: "absolute",
  },
  tabBarIcon: {
    width: 390,
    height: 105,
    position: "absolute",
  },
  changePasswordChild: {
    borderRadius: 25,
    backgroundColor: Color.darkslateblue,
    left: 0,
    top: 0,
  },
  changePasswordItem: {
    top: 142,
    left: 30,
  },
  changePasswordInner: {
    top: 198,
    left: 31,
  },
  confirmPassword: {
    top: 169,
    left: 39,
  },
  enterNewPassword: {
    top: 113,
    left: 37,
  },
  changePassword1: {
    top: 47,
    left: 58,
    fontSize: FontSize.size_7xl,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  changePassword: {
    top: 159,
    left: 31,
  },
  signUpButtonChild: {
    top: -20,
    left: -24,
    borderRadius: Border.br_41xl,
    width: 284,
    height: 95,
    position: "absolute",
  },
  signOut: {
    marginLeft: -95,
    left: "50%",
    fontSize: FontSize.size_11xl,
    color: Color.darkslateblue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 190,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    height: 47,
    top: 0,
  },
  signUpButton: {
    top: 577,
    left: 78,
    width: 236,
  },
  settings: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Settings;
