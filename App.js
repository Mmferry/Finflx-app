import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainButton from "./components/MainButton";
import { ProductsNavigator } from "./navigation";

export default function App() {
  return <ProductsNavigator />;
}
