import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Alunos } from "../../components/ListaAlunos";

export default function Home(){
    function handleAluno(){
        console.log('ola')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Lista de presença
            </Text>
            <Text style={styles.sub_titulo}>
                Terça, 12 de março de 2024
            </Text>
            <View style={styles.form}>            
                <TextInput style={styles.input}
                placeholder="Aluno..."
                placeholderTextColor="#6B6B6B"
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleAluno}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <Alunos nome={'Bruno Medeiros'} />
            <Alunos nome={'Isadora'} />
            <Alunos nome={'Maria'} />
            <Alunos nome={'João'} />
        </View>
    )
}