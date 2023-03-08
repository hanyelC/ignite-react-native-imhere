import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

const list = ['foo', 'baz', 'rodrigo', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

export function Home() {
  function handleParticipantAdd() {
    console.log('click')
  }

  function handleParticipantRemove(name: string) {
    console.log('remove', name)
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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map((name) => (
          <Participant
            key={name}
            name={name}
            onRemove={() => handleParticipantRemove(name)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
