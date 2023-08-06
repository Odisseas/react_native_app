import { Pressable, StyleSheet, Text, TextInput, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const AddField = () => {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView>
    <StatusBar style='auto'/>
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
            <Image source={require('../assets/images/icons/078-grass.png')} style={{marginVertical: 10}}/>
            <Image source={require('../assets/images/icons/080-land.png')} style={{marginVertical: 10}}/>
            <Image source={require('../assets/images/icons/083-terrain.png')} style={{marginVertical: 10}}/>
          </View>
          <TextInput placeholder='Όνομα Χωραφιού' style={styles.inputs}></TextInput>
          <TextInput placeholder='Κωδικός' style={styles.inputs}></TextInput>
          <Text style={{fontSize: 10, color: '#4F9F8FF0', marginTop: -10, marginBottom: 15}}>** Θα σας δοθεί από εμάς</Text>
          <TextInput keyboardType="phone-pad" placeholder='Στρέμματα' style={styles.inputs}></TextInput>
          <TextInput placeholder='Καλλιέργεια' style={styles.inputs}></TextInput>
          <TextInput placeholder='Σπόρος' style={styles.inputs}></TextInput>
          <TextInput placeholder='Πομόνα' style={styles.inputs}></TextInput>
          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Pressable style={[styles.btn, {backgroundColor: '#DEDEDEFF', marginRight: 10}]} onPress={() => navigation.goBack()}><Text style={{color: 'crimson', padding: 15}}>Ακύρωση</Text></Pressable>
            <Pressable style={styles.btn}><Text style={{color: 'white', padding: 15}}>Δημιουργία</Text><Image style={{width: 20, height: 20, marginRight: 10, transform: [{rotate: '180deg'}]}} source={require('../assets/images/icons/i-left.png')} /></Pressable>
        </View>
          <Text style={{width: '100%', fontSize: 10, color: '#4F9F8FF0', marginTop: -10, marginBottom: 15}}>** κρατήστε πατημένο το κουμπί για να δημιουργήσετε το χωράφι</Text>

          <View style={{width: '100%', marginTop: 35}}>
            <Image style={{width: 32, height: 32, alignSelf: 'center'}} source={require('../assets/images/icons/i-warning.png')} />
            <Text style={{flex: 1, padding: 10, marginTop: 10, color: '#656565', borderRadius: 5, backgroundColor: '#DEDEDE50'}} >Εναλλακτικά, μπορείτε να συνδέσετε την δήλωσή σας παρακάτω, και να συμπληρωθούν όλα τα στοιχεία σας αυτόματα:</Text>
          </View>
          <Pressable style={{marginVertical: 15, padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightskyblue', borderRadius: 15}}>
            <Image style={{borderRadius: 150, width: 32, height: 32, marginRight: 20}} source={require('../assets/images/icons/taxisnet.png')} />
            <Text style={{fontSize: 30}}>Σύνδεση με Taxis</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddField

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        padding: 20
    },
    inputs: {
      width: '100%',
      padding: 10,
      marginVertical: 15,
      backgroundColor: '#DEDEDE88',
      borderRadius: 5
    },
    dropDown: {
      flex: 1,
      margin: 20
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#4F9F8FF0'
    }
})