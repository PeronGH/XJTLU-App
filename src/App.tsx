import React from "react";
import type { PropsWithChildren } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

function App(): JSX.Element {


  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

export default App;
