import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "./GlobalStyles";

const TeamPlayerDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.teamPlayerDetails, styles.iconLayout]}>
      <View style={[styles.teamPlayerDetailsChild, styles.teamLayout]} />
      <View style={[styles.teamPlayerDetailsItem, styles.teamLayout]} />
      <Text style={[styles.playerName, styles.playerNameTypo]}>
        Player Name
      </Text>
      <Text style={[styles.playerTeam, styles.positionTypo]}>Player Team</Text>
      <Text style={[styles.position, styles.positionTypo]}>Position</Text>
      <Image
        style={styles.teamPlayerDetailsInner}
        resizeMode="cover"
        source={require("./assets/ellipse-2.png")}
      />
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
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text
        style={[styles.fantasyPpg, styles.fantasyPpgTypo]}
      >{`Fantasy PPG  |  Points  |  Rebounds  |  Assists  |  Blocks  |  Steals
`}</Text>
      <Text style={[styles.averages, styles.averagesTypo]}>Averages:</Text>
      <View
        style={[styles.teamPlayerDetailsChild1, styles.dateOpponentPosition]}
      />
      <View style={styles.teamPlayerDetailsChild2} />
      <Text
        style={[styles.dateOpponent, styles.addPlayer1FlexBox]}
      >{`Date         |        Opponent       |       Fantasy Points                        
`}</Text>
      <Text style={[styles.recentGames, styles.averagesTypo]}>
        Recent games:
      </Text>
      <Text style={[styles.playerNews, styles.averagesTypo]}>Player news</Text>
      <View style={styles.addPlayer}>
        <Image
          style={styles.addPlayerChild}
          resizeMode="cover"
          source={require("./assets/rectangle-1.png")}
        />
        <Text style={[styles.addPlayer1, styles.addPlayer1Position]}>
          Add player
        </Text>
      </View>
      <Image
        style={[styles.tabBarIcon, styles.addPlayer1Position]}
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
  teamLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  playerNameTypo: {
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
  },
  positionTypo: {
    fontSize: FontSize.size_mini,
    top: 233,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 85,
    width: 316,
    borderWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 37,
    borderRadius: Border.br_8xs,
  },
  fantasyPpgTypo: {
    textDecoration: "underline",
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  averagesTypo: {
    left: 47,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  dateOpponentPosition: {
    top: 449,
    position: "absolute",
  },
  addPlayer1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
  },
  addPlayer1Position: {
    top: 0,
    position: "absolute",
  },
  teamPlayerDetailsChild: {
    top: 126,
    left: 18,
    backgroundColor: Color.darkslateblue,
    width: 357,
    height: 699,
  },
  teamPlayerDetailsItem: {
    top: 136,
    left: 27,
    backgroundColor: Color.gainsboro,
    width: 339,
    height: 676,
  },
  playerName: {
    top: 198,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    left: 145,
    position: "absolute",
  },
  playerTeam: {
    left: 145,
    top: 233,
  },
  position: {
    left: 261,
  },
  teamPlayerDetailsInner: {
    top: 195,
    left: 42,
    width: 79,
    height: 76,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowLeft: {
    left: 35,
    top: 149,
    width: 32,
    height: 32,
    position: "absolute",
  },
  rectangleView: {
    top: 315,
    position: "absolute",
  },
  fantasyPpg: {
    left: 44,
    top: 315,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    textDecoration: "underline",
    fontSize: FontSize.size_3xs,
  },
  averages: {
    top: 288,
  },
  teamPlayerDetailsChild1: {
    height: 85,
    width: 316,
    borderWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 37,
    borderRadius: Border.br_8xs,
  },
  teamPlayerDetailsChild2: {
    top: 602,
    height: 57,
    width: 316,
    borderWidth: 1,
    borderColor: "rgba(5, 88, 164, 0.76)",
    borderStyle: "solid",
    backgroundColor: Color.white,
    left: 37,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  dateOpponent: {
    left: 45,
    width: 308,
    top: 449,
    position: "absolute",
    textDecoration: "underline",
    fontSize: FontSize.size_3xs,
    color: Color.black,
  },
  recentGames: {
    top: 422,
  },
  playerNews: {
    top: 564,
  },
  addPlayerChild: {
    top: -20,
    left: -24,
    borderRadius: Border.br_41xl,
    width: 284,
    height: 95,
    position: "absolute",
  },
  addPlayer1: {
    marginLeft: -95,
    left: "50%",
    color: Color.darkslateblue,
    width: 190,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_11xl,
    top: 0,
  },
  addPlayer: {
    top: 721,
    left: 77,
    width: 236,
    height: 47,
    position: "absolute",
  },
  tabBarIcon: {
    left: 0,
    width: 390,
    height: 105,
  },
  teamPlayerDetails: {
    backgroundColor: Color.midnightblue,
    flex: 1,
    height: 844,
  },
});

export default TeamPlayerDetails;
