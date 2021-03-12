//Stack Navigation

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    {/* name 값은 네비게이션 바에 들어가는 이름임 */}
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
