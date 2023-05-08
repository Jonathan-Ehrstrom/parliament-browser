import { ListItem } from "@rneui/themed";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";

export const PersonsByRoleScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { role } = route.params;

    axios
      .get("https://api.lagtinget.ax/api/persons.json?state=1")

      .then((response) => {
        setData(response.data.users);
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert("Network error: " + err, "Please try again later");
      });
  }, []);

  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.full_name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
