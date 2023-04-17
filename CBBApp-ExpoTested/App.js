const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import UserHomepage from "./UserHomepage";
import MyTeamsHome from "./MyTeamsHome";
import LeagueSettings from "./LeagueSettings";
import MyLeaugesStandings from "./MyLeaugesStandings";
import DraftLobby from "./DraftLobby";
import MyLeaugesHome from "./MyLeaugesHome";
import TeamLeaguePlayerPool from "./TeamLeaguePlayerPool";
import TradeConfirmation from "./TradeConfirmation";
import TradeOtherTeam from "./TradeOtherTeam";
import TradeMyTeam from "./TradeMyTeam";
import SpecificTeamHome1 from "./SpecificTeamHome1";
import TeamPlayerDetails from "./TeamPlayerDetails";
import PlayerPool from "./PlayerPool";
import CreateALeague from "./CreateALeague";
import LogIn from "./LogIn";
import SignUpInformationCollection from "./SignUpInformationCollection";
import HomePostLaunch from "./HomePostLaunch";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Lato_bold: require("./assets/fonts/Lato_bold.ttf"),
    "Open Sans_extrabold": require("./assets/fonts/Open_Sans_extrabold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="UserHomepage"
              component={UserHomepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyTeamsHome"
              component={MyTeamsHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LeagueSettings"
              component={LeagueSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyLeaugesStandings"
              component={MyLeaugesStandings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DraftLobby"
              component={DraftLobby}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyLeaugesHome"
              component={MyLeaugesHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TeamLeaguePlayerPool"
              component={TeamLeaguePlayerPool}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TradeConfirmation"
              component={TradeConfirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TradeOtherTeam"
              component={TradeOtherTeam}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TradeMyTeam"
              component={TradeMyTeam}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpecificTeamHome1"
              component={SpecificTeamHome1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TeamPlayerDetails"
              component={TeamPlayerDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlayerPool"
              component={PlayerPool}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateALeague"
              component={CreateALeague}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpInformationCollection"
              component={SignUpInformationCollection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePostLaunch"
              component={HomePostLaunch}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
