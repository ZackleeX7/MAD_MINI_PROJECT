import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function ChallengeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.header, { color: colors.text }]}>
        Library Promotions
      </Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
        }}
        style={styles.banner}
      />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📚 5 Books Reading Challenge</Text>
        <Text style={styles.cardText}>
          Borrow and read 5 books this month and get free coffee from the
          campus cafe!
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎁 Library Week Event</Text>
        <Text style={styles.cardText}>
          Participate in library week activities and win exclusive merchandise.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💻 Study Space Promotion</Text>
        <Text style={styles.cardText}>
          Comfortable study space available with free WiFi and charging stations.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  banner: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#ffffff", // putih
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,

    // shadow supaya terlihat modern
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  cardText: {
    fontSize: 14,
    color: "#555",
  },
});