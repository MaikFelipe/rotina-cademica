
import { colors } from "@/style/color";
import { ActivityIndicator } from "react-native";


export function Loading() {
    return <ActivityIndicator size={75} color={colors.primary}/>;
}