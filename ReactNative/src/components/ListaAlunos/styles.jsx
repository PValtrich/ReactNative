
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10
    },
    name: {
        color: '#fff',
        flex: 1,
        marginLeft: 16
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 24
    }
})