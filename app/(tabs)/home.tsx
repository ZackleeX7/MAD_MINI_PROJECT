import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <Ionicons
        name="home-outline"
        size={72}
        color={colors.tint}
        style={{ marginBottom: 16 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 8 }}>
        Library Promotion
      </Text>
      <Text style={{ fontSize: 16, color: colors.text }}>
        Recommended Books
      </Text>
    </View>
  );
}
