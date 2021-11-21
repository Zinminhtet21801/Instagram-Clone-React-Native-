import * as React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SignedInStack from "./screens/Navigation";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return (
    <SignedInStack />
  );
}
