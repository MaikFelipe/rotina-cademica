
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/style/color";
import { styles } from "./styles";

export function SummaryCard() {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <MaterialCommunityIcons
                name="clipboard-alert"
                size={28}
                color={colors.orange}
            />
            <Text style={styles.textRow}>3</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.titleContent}>Pendências</Text>
            <Text style={styles.subtitleContent}>Para esta semana</Text>
        </View>
    </View>
  );
}