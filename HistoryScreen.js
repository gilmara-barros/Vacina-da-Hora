import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HistoryScreen() {
  const vaccines = [
    { id: 1, name: 'Hepatite B', date: '2024-01-10' },
    { id: 2, name: 'Tétano', date: '2024-03-15' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {vaccines.map(vaccine => (
        <View key={vaccine.id} style={styles.card}>
          <Text style={styles.text}>{vaccine.name}</Text>
          <Text style={styles.text}>Data: {vaccine.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
