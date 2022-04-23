import { StyleSheet, Text, TouchableOpacityBase, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Avatar } from "react-native-elements";

const ChatScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id, chatName } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
            }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
            {chatName}
          </Text>
        </View>
      ),

      headerLeft: () => (
        <View>
          <TouchableOpacityBase> </TouchableOpacityBase>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
