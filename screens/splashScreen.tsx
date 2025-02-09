import { View, Image, Text } from "react-native";

const SplashScreen: React.FC = () => {
  const exampleImage = require("../assets/soccer.jpg");
  return (
    <View>
      <Text>"Yalla</Text>
      <Image source={exampleImage}></Image>
    </View>
  );
};

export default SplashScreen;
