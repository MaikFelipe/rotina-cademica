import { router } from "expo-router";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { fontFamily } from "@/style/fontFamily";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá mundo</Text>
      <Text style={styles.subtitle}>Faculdade de Sistemas de Informação</Text>
        <Button
          title="Fazer login"
          onPress={() => {
            router.navigate("/two-screen");
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 42 : 0,
  },
  title: {
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fontFamily.regular,
  },
  buttonSpacing: {
    marginBottom: 12,
  },
});