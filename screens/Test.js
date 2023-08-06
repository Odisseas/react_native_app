import {ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Testing = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
  
    const navigation = useNavigation();
    const {
        params: {
            item
        }
    } = useRoute();

    let txtName = item
    let txtAge = age

    const save = async ()=> {
        try {
            await AsyncStorage.multiSet([['myName', name], ['myAge', age]])
        } catch (error) {
            console.log(error)
        }
    }

    const remove = async ()=> {
        try {
            await AsyncStorage.removeItem(e)
        } catch (error) {
            console.log(error)
        } finally {
            setName("")
        }
    }

    const load = async ()=> {
        try {
            let name = await AsyncStorage.getItem('myName')
            if (name != null) {
                setName(item.name)
            }
            let age = await AsyncStorage.getItem('myAge')
            if (age != null) {
                setAge(age)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(item)
        load()
    }, [])

  return (
    <>      
        { item.irrigation !== 'none' ? 

            <ImageBackground
            source={item.type === 'corn' ? require('../assets/images/util/corn2.jpg') : (item.type === 'cotton' ? require('../assets/images/util/cotton3.jpg') : (item.type === 'barley' ? require('../assets/images/util/barley1.jpg') : (item.type === 'tomato' ? require('../assets/images/util/tomato1.jpg') : (item.type === 'melon' ? require('../assets/images/util/melon1.jpg') : (item.type === 'watermelon' ? require('../assets/images/util/watermelon1.jpg') : (item.type === 'onion' ? require('../assets/images/util/onion4.jpg') : require('../assets/images/util/trees3.jpg')))))))}
            style={{height: 260, alignSelf: 'stretch'}}
            resizeMode={'cover'}
            >
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%', backgroundColor: '#45454588'}}><Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>{name}</Text></View>
            </ImageBackground>
        :  
            <ImageBackground
                source={require('../assets/images/util/dan-senior-qp16Xm2EweY-unsplash.jpg')}
                style={{height: 260, alignSelf: 'stretch'}}
                resizeMode={'cover'}
            >
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, width: '100%', backgroundColor: '#45454588'}}><Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>{name}</Text></View>
            </ImageBackground>
        }

        <Pressable
            onPress={navigation.goBack}
            style={{position: 'absolute', zIndex: 5, height: 40, top: 50, left: 15, backgroundColor: '#FEFEFEB5', borderRadius: 150, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingRight: 15}}
        >
                <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/images/icons/i-left.png')}
                />
                <Text>πίσω</Text>
        </Pressable>

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.title, {fontSize: 15, fontWeight: 'bold'}]}>Παρακάτω αλλάξτε όποιο στοιχείο θέλετε:</Text>
            <TextInput onChangeText={text => setName(text)} placeholder='Όνομα' style={styles.input}></TextInput>
            <Text style={{fontSize: 10, marginBottom: 25, marginLeft: 30, marginTop: 5, alignSelf: 'flex-start'}}>ήταν: <Text style={{fontWeight: 'bold'}}>{item.name}</Text>, θα γίνει: <Text style={{fontWeight: 'bold', color: '#409080F0'}}>{name}</Text></Text>
            <TextInput onChangeText={text => setName(text)} placeholder='Ιδιοκτήτης' style={styles.input}></TextInput>
            <Text style={{fontSize: 10, marginBottom: 25, marginLeft: 30, marginTop: 5, alignSelf: 'flex-start'}}>ήταν: <Text style={{fontWeight: 'bold'}}>{item.owner}</Text>, θα γίνει: <Text style={{fontWeight: 'bold', color: '#409080F0'}}>{item.owner}</Text></Text>
            <TextInput onChangeText={text => setName(text)} placeholder='Καλλιεργητής (δήλωση φετινή)' style={styles.input}></TextInput>
            <Text style={{fontSize: 10, marginBottom: 25, marginLeft: 30, marginTop: 5, alignSelf: 'flex-start'}}>ήταν: <Text style={{fontWeight: 'bold'}}>{item.worker}</Text>, θα γίνει: <Text style={{fontWeight: 'bold', color: '#409080F0'}}>{item.worker}</Text></Text>
            <TextInput onChangeText={text => setName(text)} placeholder='Είδος Καλλιέργειας' style={styles.input}></TextInput>
            <Text style={{fontSize: 10, marginBottom: 25, marginLeft: 30, marginTop: 5, alignSelf: 'flex-start'}}>ήταν: <Text style={{fontWeight: 'bold'}}>{item.type}</Text>, θα γίνει: <Text style={{fontWeight: 'bold', color: '#409080F0'}}>{item.type}</Text></Text>
            <TextInput onChangeText={text => setName(text)} placeholder='Σπόρος' style={styles.input}></TextInput>
            <Text style={{fontSize: 10, marginBottom: 25, marginLeft: 30, marginTop: 5, alignSelf: 'flex-start'}}>ήταν: <Text style={{fontWeight: 'bold'}}>{item.seed}</Text>, θα γίνει: <Text style={{fontWeight: 'bold', color: '#409080F0'}}>{item.seed}</Text></Text>
            <TextInput onChangeText={text => setName(text)} placeholder='Πομόνα' style={styles.input}></TextInput>
            <Text style={{fontSize: 10, marginBottom: 25, marginLeft: 30, marginTop: 5, alignSelf: 'flex-start'}}>ήταν: <Text style={{fontWeight: 'bold'}}>{item.pump}</Text>, θα γίνει: <Text style={{fontWeight: 'bold', color: '#409080F0'}}>{item.pump}</Text></Text>
            <TextInput onChangeText={text => setName(text)} placeholder='Είδος Ποτίσματος' style={styles.input}></TextInput>
            <Text style={{fontSize: 10, marginBottom: 25, marginLeft: 30, marginTop: 5, alignSelf: 'flex-start'}}>ήταν: <Text style={{fontWeight: 'bold'}}>{item.irrigation}</Text>, θα γίνει: <Text style={{fontWeight: 'bold', color: '#409080F0'}}>{item.irrigation}</Text></Text>
            <Pressable style={[styles.btn, {backgroundColor: '#DEDEDE99'}]} onPress={() => navigation.goBack()}><Text style={{color: 'crimson'}}>Ακύρωση</Text></Pressable>
            <Text style={{fontSize: 10, color: '#4F9F8FF0', marginTop: 20, marginBottom: 0, borderBottomWidth: 2, borderColor: '#4F9F8FF0', paddingBottom: 5}}>κρατήστε πατημένο το κουμπί για να επιβεβαιώσετε τις αλλαγές</Text>
            {/* <Pressable onPress={() => save()} style={styles.btn}><Text style={{color: 'white'}}>Επιβεβαίωση</Text></Pressable> */}
            <Pressable onLongPress={() => {console.log('I long pressed the button!')}} style={styles.btn}><Text style={{color: 'white'}}>Επιβεβαίωση</Text></Pressable>
        </ScrollView>
    </>
  )
}

export default Testing

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        paddingBottom: 30
    },
    title: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 20
    },
    input: {
        borderColor: '#DEDEDE88',
        borderWidth: 1,
        alignSelf: 'stretch',
        marginHorizontal: 25,
        padding: 12,
        borderRadius: 10
    },
    btn: {
        marginTop: 20,
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#4F9F8FF0',
        alignSelf: 'stretch',
        marginHorizontal: 25,
        alignItems: 'center'
    }
})