import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ActivityIndicator,
  DimensionValue,
} from 'react-native';

interface EplButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  isLoading: boolean;
  width?: DimensionValue;
  disabled?: boolean;
}

export const EplButton: React.FC<EplButtonProps> = ({
  title,
  onPress,
  isLoading,
  width = '100%',
  disabled = false,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.Button,
          {width, backgroundColor: disabled ? '#B0B0B0' : '#143D60'},
        ]}
        onPress={onPress}
        disabled={disabled}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.ButtonText}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#143D60',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#FFFFF',
  },
  ButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
