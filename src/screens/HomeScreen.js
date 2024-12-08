import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

export default function HomeScreen({ navigation }) {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Simulasi pengambilan data dari server
    setSalesData([
      { id: "1", item: "Ayam Kampung", quantity: 5, price: 25000 },
      { id: "2", item: "Ayam Potong", quantity: 10, price: 20000 },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Penjualan</Text>
      <FlatList
        data={salesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.item} - {item.quantity} pcs - Rp {item.price}
          </Text>
        )}
      />
      <Button
        title="Tambah Penjualan"
        onPress={() => navigation.navigate("Add Sales")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});
