import React, {useState} from 'react'
import { Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Speech from 'expo-speech'

import CustomImage from '../../Components/CustomImage'
import { styles } from './styles';

import Balanca from '../../../assets/balanca.png'
import Medica from '../../../assets/medica.png'

export default function Home() {
  const [states, setStates] =useState({peso: '', altura: ''})

  function handleSubmit() {
    let msg = ''
    const alt = states.altura / 100
    const imc = states.peso / (alt * alt)

    if (imc <= 0 || alt <= 0 || states.peso <= 0) {
      Speech.speak('Dados incorretos' + 'Por favor informe corretamente os campos. Exemplo: Peso: 40 (kg). Altura: 150 (cm)', {language: 'pt-BR'})
      Alert.alert('Dados incorretos \nPor favor informe corretamente os campos.' + '\nExemplo: Peso: 40 (kg). Altura: 150 (cm)')
    } else if (imc < 17) {
      Speech.speak('Calculo do I M CÊ - Resultado' + `I M CÊ = ${imc.toFixed(2)}` + 'Você está MUITO ABAIXO do peso', {language: 'pt-BR'})
      Alert.alert('Calculo do IMC - Resultado' + `\nIMC = ${imc.toFixed(2)}` + '\nVocê está MUITO ABAIXO do peso')
    } else if (imc >= 17 && imc < 18.5) {
      Speech.speak('Calculo do I M CÊ - Resultado' + `I M CÊ = ${imc.toFixed(2)}` + 'Você está ABAIXO do peso', {language: 'pt-BR'})
      Alert.alert('Calculo do IMC - Resultado' + `\nIMC = ${imc.toFixed(2)}` + '\nVocê está ABAIXO do peso')
    } else if (imc >= 18.5 && imc < 25) {
      Speech.speak('Calculo do I M CÊ - Resultado' + `I M CÊ = ${imc.toFixed(2)}` + 'Você está com peso NORMAL', {language: 'pt-BR'})
      Alert.alert('Calculo do IMC - Resultado' + `\nIMC = ${imc.toFixed(2)}` + '\nVocê está com peso NORMAL')
    } else if (imc >= 25 && imc < 30) {
      Speech.speak('Calculo do I M CÊ - Resultado' + `I M CÊ = ${imc.toFixed(2)}` + 'Você está com SOBREPESO', {language: 'pt-BR'})
      Alert.alert('Calculo do IMC - Resultado' + `\nIMC = ${imc.toFixed(2)}` + '\nVocê está com SOBREPESO')
    } else if (imc >= 30 && imc < 35) {
      Speech.speak('Calculo do I M CÊ - Resultado' + `I M CÊ = ${imc.toFixed(2)}` + 'Você está OBESO (Obesidade GRAU 1)', {language: 'pt-BR'})
      Alert.alert('Calculo do IMC - Resultado' + `\nIMC = ${imc.toFixed(2)}` + '\nVocê está OBESO (Obesidade GRAU 1)')
    } else if (imc >= 35 && imc < 40) {
      Speech.speak('Calculo do I M CÊ - Resultado' + `I M CÊ = ${imc.toFixed(2)}` + 'Você está OBESO (Obesidade GRAU 2)', {language: 'pt-BR'})
      Alert.alert('Calculo do IMC - Resultado' + `\nIMC = ${imc.toFixed(2)}` + '\nVocê está OBESO (Obesidade GRAU 2)')
    } else if (imc > 40) {
      Speech.speak('Calculo do I M CÊ - Resultado' + `I M CÊ = ${imc.toFixed(2)}` + 'Você está OBESO (Obesidade GRAU 3)', {language: 'pt-BR'})
      Alert.alert('Calculo do IMC - Resultado' + `\nIMC = ${imc.toFixed(2)}` + '\nVocê está OBESO (Obesidade GRAU 3)')
    }
  }

  function handleClear() {
    setStates({peso: '', altura: ''})
  }

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' backgroundColor='#AD6200'/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomImage
          fromWeb={false}
          image={Balanca}
          title={'Calcule seu IMC'}
          width={147}
          height={168}
        />
        
        <TextInput
          style={styles.input}
          value={states.peso}
          onChangeText={(text)=>{setStates({...states, peso: text})}}
          placeholder='Digite o peso (kg)'
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          value={states.altura}
          onChangeText={(text)=>{setStates({...states, altura: text})}}
          placeholder='Digite a altura (cm)'
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <CustomImage
            fromWeb={false}
            image={Medica}
            title={'Calcular'}
            width={125}
            height={213}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={{color: '#8D4600', fontSize: 25, fontWeight: 'bold'}}>Limpar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>

  )
}