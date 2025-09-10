import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Hola mundo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    maxHeight: '50%',
  },
  Text: {
    fontSize: 30,
    color: 'salmon',
    fontWeight: 'bold',
  },
})

export default HelloWorld