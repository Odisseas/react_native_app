import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Waters from '../components/Waters';
import { allWaters } from '../components/Data';
import {
    profilePic,
    profileName,
    minDetails,
    tempDetails,
    waterDetails,
    rainDetails,
    hSoilDetails,
    hAirDetails,
    pressureDetails,
    windDetails
} from '../components/Settings';

import Witch from '../components/Switch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

// console.log('all details: ' + minDetails());

const Details = () => {
    const [allSensors, updateSettings] = useState(minDetails)
    const [water, updateWater] = useState(waterDetails)
    const [temp, updateTemp] = useState(tempDetails)
    const [wind, updateWind] = useState(windDetails)
    const [rain, updateRain] = useState(rainDetails)
    const [hSoil, updatehSoil] = useState(hSoilDetails)
    const [hAir, updatehAir] = useState(hAirDetails)
    const [pressure, updatePressure] = useState(pressureDetails)

    const toggleAll = () => {
        updateSettings(switched=>!switched)
        AsyncStorage.setItem('allSettings', allSensors)
        console.log('allSensors = ' + allSensors)
    }

    const toggleWater = () => {
        updateWater(switched=>!switched)
        AsyncStorage.setItem('waterSettings', water)
        console.log('allSensors = ' + allSensors)
    }

    const toggleTemp = () => {
    }

    const toggleWind = () => {
    }

    const toggleRain = () => {
    }

    const togglehSoil = () => {
    }

    const togglehAir = () => {
    }

    const togglePressure = () => {
    }

  return (
    <SafeAreaView>
        <StatusBar style='auto'/>
        <ScrollView>
            <View style={styles.container}>
                
                {/* ΛΟΓΑΡΙΑΣΜΟΣ */}
                <View style={[styles.section]}>
                    <View>
                        <Pressable onPress={()=>{console.log('Change Name')}} style={{alignSelf: 'center', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'steelblue'}}>{profileName}</Text>
                            <Image
                                style={{width: 25, height: 25, marginLeft: 10}}
                                source={require('../assets/images/icons/edit6.png')}
                            />
                        </Pressable>
                    </View>
                        <Image
                            style={{width: 170, height: 170, borderRadius: 150, alignSelf: 'center', marginTop: 25, borderColor: 'steelblue', borderWidth: 5}}
                            source={ profilePic }
                        />
                        <TouchableOpacity onPress={()=>{console.log('Change Profile Pic')}} style={{alignSelf: 'center', backgroundColor: '#DEDEDE', padding: 10, marginTop: 10, borderRadius: 8}}><Text style={{color: 'red'}}>Αλλαγή</Text></TouchableOpacity>

                        <View style={{width: '100%', marginTop: 35}}>
                        <Text style={{flex: 1, padding: 10, marginTop: 10, color: '#656565', borderRadius: 5, backgroundColor: '#DEDEDE50'}} >Μπορείτε να συνδέσετε την δήλωσή σας παρακάτω, και να συμπληρωθούν όλα τα στοιχεία σας (χωράφια / στρέμματα / είδος καλλιέργειας) αυτόματα:</Text>
                        </View>
                        <Pressable onPress={()=>{console.log('TAXIS')}} style={{marginVertical: 15, padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightskyblue', borderRadius: 15}}>
                            <Image style={{borderRadius: 150, width: 32, height: 32, marginRight: 20}} source={require('../assets/images/icons/taxisnet.png')} />
                            <Text style={{fontSize: 30}}>Σύνδεση με Taxis</Text>
                        </Pressable>
                </View>
                
                {/* ΠΟΜΟΝΕΣ */}
                <View style={[styles.section, {marginTop: 35}]}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={styles.sectionImg}
                            source={require('../assets/images/icons/i-water2.png')}
                        />
                        <Text style={styles.sectionTitle}>Πομόνες ({allWaters.length})</Text>
                        <Pressable onPress={()=>{console.log('refresh sensors')}} style={{alignSelf: 'center', marginLeft: 'auto', paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#DEDEDE', borderRadius: 12, marginRight: 10}}><Text style={{fontSize: 12, fontWeight: 'bold', color: '#09F', lineHeight: 20, letterSpacing: 1, textDecorationStyle: 'dotted'}}>προσθήκη</Text></Pressable>
                    </View>
                    <View style={styles.section}>
                        <View style={{flexDirection: 'row'}}>
                            <Waters />
                        </View>
                    </View>
                </View>

                {/* ΡΥΘΜΙΣΕΙΣ */}
                <View style={[styles.section, {marginTop: 35}]}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={styles.sectionImg}
                            source={require('../assets/images/icons/i-settings2.png')}
                        />
                        <Text style={styles.sectionTitle}>Ρυθμίσεις</Text>
                    </View>
                    <View>
                        <View style={styles.detailsMain}>
                            <View style={styles.sensor}>
                                <Text style={styles.sensorDesc}>Εμφάνιση Αισθητήρων στην Αρχική</Text>
                                <Witch isEnabled={allSensors} toggleSwitch={toggleAll}/>
                            </View>
                            <View style={styles.sensor}>
                                <Text style={styles.sensorDesc}>Ατμόσφαιρες Πομόνας</Text>
                                <Witch isEnabled={water} toggleSwitch={toggleWater}/>
                            </View>
                            <View style={styles.sensor}>
                                <Text style={styles.sensorDesc}>Θερμοκρασία</Text>
                                <Witch isEnabled={temp} toggleSwitch={toggleTemp}/>
                            </View>
                            <View style={styles.sensor}>
                                <Text style={styles.sensorDesc}>Άνεμος</Text>
                                <Witch isEnabled={wind} toggleSwitch={toggleWind}/>
                            </View>
                            <View style={styles.sensor}>
                                <Text style={styles.sensorDesc}>Βροχή</Text>
                                <Witch isEnabled={rain} toggleSwitch={toggleRain}/>
                            </View>
                            <View style={styles.sensor}>
                                <Text style={styles.sensorDesc}>Υγρασία Αέρος</Text>
                                <Witch isEnabled={hAir} toggleSwitch={togglehAir}/>
                            </View>
                            <View style={styles.sensor}>
                                <Text style={styles.sensorDesc}>Υγρασία Εδάφους</Text>
                                <Witch isEnabled={hSoil} toggleSwitch={togglehSoil}/>
                            </View>
                            <View style={styles.sensor}>
                                <Text style={styles.sensorDesc}>Ατμοσφαιρική Πίεση</Text>
                                <Witch isEnabled={pressure} toggleSwitch={togglePressure}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#F5F5F5',
        padding: 20
    },
    section: {
        flex: 1,
        marginVertical: 12,
        padding: 5,
    },
    sectionImg: {
        width: 32,
        height: 32,
        marginRight: 15
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 2,
        paddingHorizontal: 5
    },
    detailsMain:{
        borderTopColor: '#F0F0F0FF',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        width: '100%',
        marginTop: 10
    },
    sensor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 4,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#DEDEDE90'
    },
    sensorImg: {
        width: 32,
        height: 32,
        marginRight: 5
    },
    sensorText: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'grey'
    },
    sensorDesc: {
        fontSize: 11,
        color: '#999',
        marginRight: 'auto'
    }
})