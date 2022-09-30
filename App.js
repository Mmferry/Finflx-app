import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainButton from "./components/MainButton";

export default function App() {
  return (
    <LinearGradient
      colors={["rgba(216, 215, 255, 1)", "rgba(242, 241, 255, 1)"]}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.imgBg}>
          <Image
            source={require("./assets/bank.png")}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View>
          <Text style={styles.title}>Earn daily on your savings!</Text>
          <Text style={styles.desc}>
            Get daily interest up to 1.3% annually on your savings. Your savings
            account has capital protection for upto AED 10,000.00 against theft
            and fraud. Save in peace with FinFlx today
          </Text>
        </View>
        <MainButton>Get started</MainButton>
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 15,
  },
  imgBg: {
    width: 95,
    height: 95,
    backgroundColor: "#FFF4D8",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 40,
    color: " #000000",
    marginBottom: 27,
  },
  desc: {
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 22,
  },
});
