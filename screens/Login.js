import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { Video } from "expo-av";
import AppButton from "./AppButton";
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/background.mp4")}
        style={styles.background}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        volume={1}
        muted={true}
        resizeMode="cover"
      />
        <View style={styles.logoContainer}>
          <Text style={{ fontSize: 45, fontWeight: 800, color: "white" }}>
            Food Mall
          </Text>
          <View style={{ flexDirection: "row",borderBottom:2,borderColor:'red',marginBottom:10 }}>
            <Text
              style={{ fontSize: 28, fontWeight: "bold", color: "#8C001A" }}
            >
              Food
            </Text>
            <Text style={styles.tagline}>Instamart</Text>
            <Text style={styles.tagline}>Dineout</Text>
          </View>
          <View>
            <Text style={{fontSize:24,fontWeight:700,color:"#8C001A"}}>Order from  top Restaurant</Text>
          </View>
          <View>
            <AppButton title="Get started" navigation={navigation}  />
          </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 25,
  },
  tagline: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8C001A",
    marginHorizontal: 10,
  },
});

export default Login;
