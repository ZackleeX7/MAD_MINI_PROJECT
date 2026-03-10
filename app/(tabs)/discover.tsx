import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
};

const booksData: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://covers.openlibrary.org/b/id/12547115-L.jpg",
  },
  {
    id: "2",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: "https://covers.openlibrary.org/b/id/8234428-L.jpg",
  },
  {
    id: "3",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    cover: "https://covers.openlibrary.org/b/id/8234427-L.jpg",
  },
  {
    id: "4",
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    cover: "https://covers.openlibrary.org/b/id/8234426-L.jpg",
  },
];

export default function DiscoverScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const [search, setSearch] = useState("");

  const filteredBooks =
    search.length === 0
      ? []
      : booksData.filter((book) =>
          book.title.toLowerCase().includes(search.toLowerCase())
        );

  const renderBook = ({ item }: { item: Book }) => (
    <View style={styles.bookCard}>
      <Image source={{ uri: item.cover }} style={styles.cover} />

      <View style={styles.info}>
        <Text style={[styles.title, { color: colors.text }]}>
          {item.title}
        </Text>

        <Text style={[styles.author, { color: colors.text }]}>
          {item.author}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />

        <TextInput
          placeholder="Search books..."
          placeholderTextColor="gray"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* BOOK LIST */}
      <FlatList
        data={filteredBooks}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          search.length === 0 ? (
            <Text style={[styles.message, { color: colors.text }]}>
              Start typing to search books
            </Text>
          ) : (
            <Text style={[styles.message, { color: colors.text }]}>
              No books found
            </Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40, // memperbaiki posisi search bar
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(150,150,150,0.15)",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },

  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },

  bookCard: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "rgba(150,150,150,0.1)",
    padding: 10,
    borderRadius: 10,
  },

  cover: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },

  info: {
    marginLeft: 12,
    justifyContent: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  author: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4,
  },

  message: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
});