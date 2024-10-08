import { TextInput, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { loginStyle } from "./LoginStyle";

export default function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View>
            <StatusBar style="auto" />
            <View>
                
            </View>

            <View>
                <TextInput
                    style={loginStyle.inputLogin}
                    placeholder="Login..."
                    onChangeText={(e) => setLogin(e)}
                    value={login}
                />
                <TextInput 
                    style={loginStyle.inputLogin}
                    placeholder="Senha..."
                    onChangeText={(e) => setSenha(e)}
                    value={senha}
                />
            </View>

        </View>
    );
}