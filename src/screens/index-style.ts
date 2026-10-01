
import { View, Text, StyleSheet, Platform } from "react-native";
import { colors } from "@/style/color";
import { fontFamily } from "@/style/fontFamily";
import { textSize } from "@/style/textSize";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },

  content: {
    paddingTop: Platform.OS === "android" ? 54 : 64,
    paddingStart: 24,
  },

  titleContent: {
    marginTop: 28,
  },

  label: {
    fontSize: textSize.label,
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
  },

  title: {
    color: colors.text.primary,
    fontSize: textSize.title,
    fontFamily: fontFamily.semiBold,
  },
  
  subtitle: {
    color: colors.text.secondary,
    fontSize: textSize.subtitle,
    fontFamily: fontFamily.regular,
  },
});