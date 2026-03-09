import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function ChallengeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Ionicons
        name="trophy-outline"
        size={72}
        color={colors.tint}
        style={{ marginBottom: 16 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 8 }}>Reading Challenge</Text>
      <Text style={{ fontSize: 16, color: colors.text }}>
        Track your progress & hit new milestones
      </Text>
    </View>
  );
}
