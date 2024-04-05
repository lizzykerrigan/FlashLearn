import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface DeckListItemProps {
  title: string;
  onPress: () => void;
}

const DeckListItem: React.FC<DeckListItemProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#F5F5FF",
    width: "100%",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DeckListItem;
