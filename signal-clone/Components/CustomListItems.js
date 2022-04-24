import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Avatar, ListItem } from "react-native-elements";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const CustomListItems = ({ id, chatName, enterChat }) => {
  const [chatMessages, setchatMessages] = useState([]);

  useLayoutEffect(() => {
    // don't forget to add an orderBy
    const unsubscribe = onSnapshot(
      collection(db, "chats", id, "messages"),
      (snapshot) => {
        setchatMessages(snapshot.docs.map((doc) => doc.data()));
      }
    );
    return unsubscribe;
  }, []);
  return (
    <View>
      <ListItem key={id} onPress={() => enterChat(id, chatName)} bottomDivider>
        <Avatar
          rounded
          source={{
            uri:
              chatMessages[0]?.photoURL ||
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "800" }}>
            {chatName}
          </ListItem.Title>
          <ListItem.Subtitle
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontWeight: "300" }}
          >
            {chatMessages[0]?.displayName}: {chatMessages[0]?.message}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default CustomListItems;

const styles = StyleSheet.create({});
