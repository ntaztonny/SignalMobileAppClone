import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Input, Button, Icon } from "react-native-elements";

import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Addchat = () => {
  const [input, setInput] = useState("");
  const navigation = useNavigation();

  const createChat = async () => {
    await addDoc(collection(db, "chats"), {
      chatName: input,
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => {
        alert(err);
      });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chat",
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter chat name"
        value={input}
        onSubmitEditing={createChat}
        onChangeText={(text) => {
          setInput(text);
        }}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default Addchat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
