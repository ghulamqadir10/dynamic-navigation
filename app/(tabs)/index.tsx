import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const index = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: `center`, alignItems: `center` }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 700,
          textDecorationLine: `underline`,
        }}
      >
        index
      </Text>
    </SafeAreaView>
  );
};

export default index;
