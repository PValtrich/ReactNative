import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#2D3047',
        padding: 24
    },
    titulo : {
        color : '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    sub_titulo: {
        color: '#6B6B6B',
        fontSize: 16,
        fontWeight: 'bold'
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#767CA7',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 10
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 24
    }
})