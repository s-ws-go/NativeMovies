import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Fav from "../screens/Fav";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getFocusedRouteNameFromRoute(route) || "Movies",
    });
  }, [navigation, route]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let routeName = route.name;
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (routeName === "Movies") {
            iconName = iconName + "film";
          } else if (routeName === "Tv") {
            iconName = iconName + "tv";
          } else if (routeName === "Search") {
            iconName = iconName + "search";
          } else if (routeName === "Fav") {
            iconName = iconName + "thumbs-up";
          }
          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? "white" : "grey"}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Fav" component={Fav} />
    </Tab.Navigator>
  );
};
