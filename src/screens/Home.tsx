import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navigation from "../navigation/Navigation";
import DeckListItem from "../components/DeckListItem";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fundamentals</Text>
      <View style={styles.list}>
        <DeckListItem title="Deck 1" onPress={() => {}} />
        <DeckListItem title="Deck 2" onPress={() => {}} />
        <DeckListItem title="Deck 3" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
  },
  list: {
    paddingHorizontal: 8,
    width: "100%",
  },
});

export default HomeScreen;
