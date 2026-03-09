import { Ionicons } from "@expo/vector-icons";
<<<<<<< HEAD
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
=======
import { Text, View } from "react-native";
>>>>>>> 0146db0a64dbb2a2aeebf7a09f3111a740a7534e

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

<<<<<<< HEAD
const recommendedBooks = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://covers.openlibrary.org/b/id/12547115-L.jpg",  // Atomic Habits cover stabil
  },
  {
    id: "2",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    cover: "https://covers.openlibrary.org/b/id/8234426-L.jpg",  // Classic untuk komunikasi & networking mahasiswa
  },
  {
    id: "3",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    cover: "https://covers.openlibrary.org/b/id/8234427-L.jpg",  // Pengembangan diri timeless
  },
  {
    id: "4",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: "https://covers.openlibrary.org/b/id/8234428-L.jpg",  // Finansial dasar yang banyak dibaca mahasiswa Indonesia
  },
];

type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
};

=======
>>>>>>> 0146db0a64dbb2a2aeebf7a09f3111a740a7534e
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

<<<<<<< HEAD
const renderBookItem = ({ item }: { item: Book }) => (
  <View style={styles.bookCard}>
    
    <Image
      source={{ uri: item.cover }}
      style={styles.bookCover}
      resizeMode="cover"
      onError={(error) => console.log(`Gagal load cover ${item.title}:`, error.nativeEvent.error)}
    />

    <View style={styles.bookInfo}>
      <Text style={[styles.bookTitle, { color: colors.text }]}>
        {item.title}
      </Text>
      <Text
        style={[
          styles.bookAuthor,
          { color: colors.text, opacity: 0.65 },
        ]}
      >
        {item.author}
      </Text>
    </View>
  </View>
);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons
          name="library-outline"
          size={64}
          color={colors.tint}
          style={styles.icon}
        />
        <Text style={[styles.title, { color: colors.text }]}>
          Library Promotion
        </Text>
        <Text
          style={[
            styles.subtitle,
            { color: colors.text, opacity: 0.7 },
          ]}
        >
          Recommended Books
        </Text>
      </View>

      {/* Daftar Buku */}
      <FlatList
        data={recommendedBooks}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 24,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
  },
  listContent: {
    paddingBottom: 20,
  },
  bookCard: {
    flexDirection: "row",
    backgroundColor: "rgba(150,150,150,0.08)",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookCover: {
    width: 90,
    height: 130,
    borderRadius: 8,
    marginRight: 16,
  },
  bookInfo: {
    flex: 1,
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  bookAuthor: {
    fontSize: 15,
  },
});
=======
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
>>>>>>> 0146db0a64dbb2a2aeebf7a09f3111a740a7534e
