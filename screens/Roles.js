import { ListItem, SearchBar } from "@rneui/themed";
import axios from "axios";
import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";

import { PersonsByRoleScreen } from "./PersonsByRoleScreen";
export const Roles = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(require("../mock/persons.json"));
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    axios
      .get("https://api.lagtinget.ax/api/roles.json?state=1")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((err) => {
        Alert.alert("Network error: " + err, "Please try again later");
      });
  }, []);

  const updateSearch = (newSearch) => {
    setSearch(newSearch);

    if (newSearch === "") {
      setFilteredData(require("../mock/persons.json"));
    } else {
      const filtered = data.filter((persons) =>
        persons.title.toLowerCase().includes(newSearch.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const onPressRole = (title) => {
    navigation.navigate("PersonsByRole", { title });
  };

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() =>
        navigation.navigate("People", { title: item.title, id: item.id })
      }
    >
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search by name"
        lightTheme="true"
        inputContainerStyle={styles.searchBar}
        onChangeText={updateSearch}
        value={search}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: "white",
  },
});
