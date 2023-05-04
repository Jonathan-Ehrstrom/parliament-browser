import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Details } from "./screens/Details";
import { Menu } from "./screens/Menu";
import { Overview } from "./screens/Overview";
import { PersonsByRoleScreen } from "./screens/PersonsByRoleScreen";
import { Roles } from "./screens/Roles";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Roles" component={Roles} />
        <Stack.Screen name="PersonsByRole" component={PersonsByRoleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
