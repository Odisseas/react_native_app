import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, Pressable, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Fields from '../components/Fields';
import { profileName, profilePic } from '../components/Settings';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomCard from '../components/BottomCard';

const HomeScreen = () => {
    const navigation = useNavigation();

    const [sheetName, setName] = useState('Όνομα Χωραφιού')
    const [sheetStatus, setStatus] = useState('')

    const ref = useRef(null);
    
    useEffect(()=> {
      console.log('ref=> ' + ref.current)
    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
		<>
			<SafeAreaView style={styles.container}>
				<StatusBar animated style={'light'}/>
				<View>
					<ImageBackground source={require('../assets/images/util/bg4.jpg')} resizeMode="cover" style={styles.navigationTop}>
					<View>
						<View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10, paddingHorizontal: 15}}>
						<Image
							style={{width: 50, height: 50, borderRadius: 50, borderColor: 'yellowgreen', borderWidth: 2}}
							source={ profilePic }
						/>
						<View style={{position: 'relative'}}>
							<Text style={styles.name}>{profileName}</Text>
							<Text style={{fontSize: 11, letterSpacing: 1, color:'white', position: 'absolute', right: 15, bottom: -2}}>Καλώς ήρθες!</Text>
						</View>
						</View>
						<View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
						<Pressable
							onPress={() => navigation.navigate('AddField')}
							style={{paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#FEFEFEA0', borderRadius: 12, marginRight: 10}}>
							<Text style={{fontSize: 12, fontWeight: 'bold', color: '#09F', lineHeight: 20, letterSpacing: 1, textDecorationStyle: 'dotted'}}>Προσθήκη</Text>
						</Pressable>
						<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
							<Image
								style={{width: 25, height: 25, marginRight: 15}}
								source={require('../assets/images/icons/i-cog1.png')}
							/>
						</TouchableOpacity>
						</View>
					</View>

					<TextInput placeholder='Ψάξτε Χωράφι' style={{backgroundColor: '#FEFEFE50', padding: 8, borderRadius: 12, marginHorizontal: 15}}></TextInput>

					</ImageBackground>
					<View style={styles.fields}>
						<Fields ref={ref} setName={setName} setStatus={setStatus}/>
					</View>
				</View>
        <BottomCard ref={ref} name={sheetName} status={sheetStatus} setName={setName} setStatus={setStatus}/>
			</SafeAreaView>
		</>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#F5F5F5',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    navigationTop: {
      paddingTop: 40,
      paddingHorizontal: 10,
      paddingVertical: 15,
      height: 260,
      justifyContent: 'space-evenly'
    },
    name: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 28,
      color: 'white',
      marginLeft: 10
    },
    buttonText: {
      fontSize: 12,
      lineHeight: 15,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
    button: {
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: 'transparent',
      width: 32,
      height: 32
    },
    fields: {
      flex: 1,
      minWidth: '100%',
    },
  });