import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState([])
  const [newParticipantName, setNewParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(newParticipantName)) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com esse nome.',
      )
    }

    setParticipants((state) => [newParticipantName, ...state])
    setNewParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((state) => state.filter((item) => item !== name))
          Alert.alert('Deletado!')
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome Do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={newParticipantName}
          onChangeText={setNewParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {list.map((name) => (
          <Participant
            key={name}
            name={name}
            onRemove={() => handleParticipantRemove(name)}
          />
        ))}
      </ScrollView> */}

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
