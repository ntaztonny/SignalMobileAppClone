import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItems = ({ id, chatName, enterChat }) => {
  return (
    <View>
      <ListItem>
        <Avatar
          rounded
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "800" }}>
            Youtube Chat
          </ListItem.Title>
          <ListItem.Subtitle
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontWeight: "300" }}
          >
            This is a subtitle This is a subtitle This is a subtitle This is a
            subtitle This is a subtitleThis is a subtitle
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default CustomListItems;

const styles = StyleSheet.create({});
