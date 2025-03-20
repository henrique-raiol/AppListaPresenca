import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { obterDataAtualFormatada } from "../../utils";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = ['Paulo', 'João', 'Maria', 'José', 'Ana', 'Pedro', 'Julia', 'Antonio', 'Carlos', 'Fernanda', 'Augusto', 'Bruno', 'Breno'];

  function handleParticipantAdd(){
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string){
    console.log(`Você clicou em remover o participante ${name}!`);
  }

  return(
    <View style={styles.container}>
      <View style={styles.headerEvent}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>{obterDataAtualFormatada()}</Text>
      </View>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={ item => item}
        renderItem={ ({item}) => <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhum participante cadastrado.</Text>
        )}
      />

    </View>
  );
}