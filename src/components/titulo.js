import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titulo = () => {
  return (
    <View>
      <Text style={styles.fonte}>IMC 2</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
    fonte: {
        color: '#4d001f',
        fontWeight: 'bold',
        fontSize: 30,
        }
})