import { TextInput, View, Text, Dimensions, Button } from "react-native";
import React, { cloneElement, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { loginStyle } from "./LoginStyle";

export default function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <StatusBar style="auto" />
            <View style={{marginBottom: 40,height: Dimensions.get('window').height/3}}>
                <Text>LOGIN:</Text>
            </View>

            <View style={loginStyle.containerInputsLogin}>
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

            <View style={{height: Dimensions.get('window').height/3, backgroundColor: 'blue'}}>
                <Button title="Enviar"/>
            </View>

        </View>
    );
}