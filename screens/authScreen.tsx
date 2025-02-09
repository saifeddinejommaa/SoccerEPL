import { View, StyleSheet, TextInput } from "react-native";
import { EplButton } from "../widgets/EplButton";
import {useNavigation} from '@react-navigation/native'

 const AuthScreen: React.FC =() => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}></View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Please enter your user name !"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="password"
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View>
        <EplButton title="Login" onPress={() => {
              //navigation.navigate("Home");
        }}></EplButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      titleContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      },
      inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        borderColor : 'black',
        padding: 10,
        alignContent: "flex-start",
      },
    
      textInput: {
        color: "#000000",
        borderColor: "#143D60",
        borderWidth: 2,
        borderRadius: 16,
        margin: 10,
        backgroundColor: "#DDDDDD",
      },
})

export default AuthScreen;