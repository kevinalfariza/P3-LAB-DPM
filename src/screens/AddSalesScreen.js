import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function AddSalesScreen({ navigation }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddSales = () => {
    if (!item || !quantity || !price) {
      Alert.alert("Error", "Semua field harus diisi!");
      return;
    }
    Alert.alert("Sukses", "Data penjualan berhasil ditambahkan!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah Penjualan Baru</Text>
      <TextInput
        placeholder="Jenis Ayam"
        style={styles.input}
        value={item}
        onChangeText={setItem}
      />
      <TextInput
        placeholder="Jumlah"
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        placeholder="Harga"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Simpan" onPress={handleAddSales} />
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
