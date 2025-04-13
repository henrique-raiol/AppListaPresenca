import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { obterDataAtualFormatada } from '../../utils';
import { Participant } from '../../components/Participant';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>('');

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert('Partcipante existe', 'Já existe um participante na lista com esse nome');
    }
    
    setParticipants(prevSate => [...prevSate, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string){

    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter( participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
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
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          onChange={e => setParticipantName(e.nativeEvent.text)}
          value={participantName}
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