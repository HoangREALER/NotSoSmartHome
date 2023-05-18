import React, {useState} from "react";
import { StyleSheet ,View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import appTheme from "../constants/theme";
import { login } from "../controller/data/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //navigate to home screen
        login(username)
        .then((result) => {
            if (result.status === 401)
                throw error
            else if (result.status === 200) {
                if (password !== result.data.password)
                    throw "Can't login"
                AsyncStorage.setItem("UserKey", JSON.stringify(result.data));
                navigation.navigate("HomeTabs");
            }
        })
        .catch((err) => {
            console.error(err)
        })
    }

    const forgotPassword = () => {
        //navigate to forgot password screen
        navigation.navigate("ForgotPassword")
    }

    const register = () => {
        //navigate to register screen
        navigation.navigate("Register")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Hello</Text>
                <Text style={styles.normalText}>Sign in to your account</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setUsername(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
            </View>

            <TouchableOpacity onpress={forgotPassword}>
                <Text stile={styles.normalText}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={register}>
                <Text style={styles.normalText}>Don't have an account? Create</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 20,
      },
      normalText: {
        fontSize: 16,
        marginBottom: 10,
      },
      inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        elevation: 5
      },
      inputText: {
        height: 50,
        color: 'black',
        
      },
      loginBtn: {
        width: '80%',
        backgroundColor: appTheme.COLORS_Light.primary,
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
      loginText: {
        color: 'white',
      },
});

export default Login;