// import { StatusBar } from "expo-status-bar";
//import {
//useDimensions,
//useDeviceOrientation,
//} from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App() {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={{
            uri: "https://media.idownloadblog.com/wp-content/uploads/2019/04/Gradient-V1-iphone-wallpaper-gradient-AR72014-768x1662.png",
          }}
        >
          <View style={styles.viewstyle}>
            <TextInput
              placeholder={"Enter your query"}
              placeholderTextColor={"#fff"}
              keyboardType={"default"}
              width={"70%"}
              style={styles.txtStyle}
            />
            <View style={styles.container}>
              <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundButton}
              >
                <Text>Amazon RDS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundButton}
              >
                <Text>Amazon Redshift</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <Button
                title={"Find record"}
                color={"orange"}
                style={styles.buttonContainer}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
//278840342059917
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //width: "100%",
    //height: "100%",
    //flex: 1,
    //marginTop: 200,
  },

  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  viewstyle: {
    flex: 1,
    padding: 1,
    marginTop: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 1,
  },

  txtStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "orange",
    marginTop: 1,
    marginBottom: 1,
  },

  roundButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    //padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
    flexDirection: "row",
    marginLeft: 20,
    //marginBottom: 1,
    //justifyContent: "space-evenly",
  },

  buttonContainer: {
    backgroundColor: "#2E9298",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});
