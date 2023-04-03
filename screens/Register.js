import React, {useState} from "react";
import { StyleSheet ,View, Text, Button, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import appTheme from "../constants/theme";
import { login_vector1, login_vector2 } from "../constants/images";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleCreateAccount = () => {
        //navigate to home screen
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Register</Text>
                <Text style={styles.normalText}>Create yout account</Text>
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

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Confirm password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => setConfirmPassword(text)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleCreateAccount}>
                <Text style={styles.loginText}>Create account</Text>
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

export default Register;