import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Ionicons
        name="person-circle-outline"
        size={72}
        color={colors.tint}
        style={{ marginBottom: 16 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 8 }}>User Profile</Text>
      <Text style={{ fontSize: 16, color: colors.text }}>
        Manage your account and preferences
      </Text>
    </View>
  );
}
