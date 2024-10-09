import { Dimensions, StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    inputLogin: {
        width: "80%",
        height: "100%",
        padding: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ccc",       
        color: "black",
        backgroundColor: 'gray',
    },
    containerInputsLogin: {
        width: '100%',
        height: Dimensions.get('window').height/4,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
    }
})