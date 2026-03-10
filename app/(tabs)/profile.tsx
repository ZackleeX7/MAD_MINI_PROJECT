<<<<<<< HEAD
import { Text, View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
=======
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
>>>>>>> edb5d192dca5ac84335b124c030cac97e133830e

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/constants/theme";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

<<<<<<< HEAD
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      
      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Ionicons
          name="person-circle-outline"
          size={80}
          color={colors.tint}
        />
        <Text style={[styles.name, { color: colors.text }]}>John Doe</Text>
        <Text style={{ color: colors.text }}>john@email.com</Text>
      </View>

      {/* Manage Account */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Manage Account
        </Text>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="create-outline" size={20} color={colors.tint} />
          <Text style={[styles.rowText, { color: colors.text }]}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="lock-closed-outline" size={20} color={colors.tint} />
          <Text style={[styles.rowText, { color: colors.text }]}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Ionicons name="log-out-outline" size={20} color={colors.tint} />
          <Text style={[styles.rowText, { color: colors.text }]}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Preferences */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Preferences
        </Text>

        <View style={styles.row}>
          <Ionicons name="moon-outline" size={20} color={colors.tint} />
          <Text style={[styles.rowText, { color: colors.text }]}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            style={{ marginLeft: "auto" }}
          />
        </View>

        <View style={styles.row}>
          <Ionicons name="notifications-outline" size={20} color={colors.tint} />
          <Text style={[styles.rowText, { color: colors.text }]}>Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            style={{ marginLeft: "auto" }}
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  rowText: {
    marginLeft: 12,
    fontSize: 15,
  },
});
=======
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
>>>>>>> edb5d192dca5ac84335b124c030cac97e133830e
