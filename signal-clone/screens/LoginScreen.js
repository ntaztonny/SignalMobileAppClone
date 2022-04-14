import { View, Text } from "react-native";
import React from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  return (
    <View>
      <StatusBar style="inverted" />
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
      />
    </View>
  );
};

export default LoginScreen;
