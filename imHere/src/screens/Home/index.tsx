import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { obterDataAtualFormatada } from '../../Utils'

export default function Home() {
  return(
    <View style={styles.container}>
      <View style={styles.headerEvent}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>{obterDataAtualFormatada()}</Text>
      </View>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor='#6B6B6B'
      />
    </View>
  );
}