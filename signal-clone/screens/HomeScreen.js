import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import CustomListItems from "../Components/CustomListItems";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItems />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {},
});
