import React, {useState} from "react";
import { StyleSheet ,View, Text, Button, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import appTheme from "../constants/theme";
import { login_vector1, login_vector2 } from "../constants/images";

const Home = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = () => {
        //navigate to login screen
    }
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Change your password</Text>
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
                    placeholder="New password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => setNewPassword(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Confirm new password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => setConfirmNewPassword(text)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleChangePassword}>
                <Text style={styles.loginText}>Change password</Text>
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
        fontSize: appTheme.SIZES.h1,
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

export default Home;