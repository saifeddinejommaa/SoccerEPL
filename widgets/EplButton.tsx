import React from "react";
import {
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from "react-native";

interface EplButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const EplButton: React.FC<EplButtonProps> = ({ title, onPress }) => {
  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.Button} onPress={onPress}>
          <Text style={styles.ButtonText}>{title}</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#DDDDDD",
    padding: 20,
    margin: 16,
    borderColor: "#FFFFF",
  },
  ButtonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
