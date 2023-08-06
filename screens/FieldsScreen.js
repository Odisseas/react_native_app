import { View, Text, ScrollView, Image, TouchableOpacity, Pressable, StyleSheet, Alert, RefreshControl } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { allWaters } from '../components/Data'
import { StatusBar } from 'expo-status-bar'
import BottomCard from '../components/BottomCard'

const FieldsScreen = () => {

    const ref = useRef(null);

    const [refresh, setRefresh] = useState(false)

    const refreshSensors = () => {
        setRefresh(true)

        setTimeout(() => {
            console.log('just refreshed the sensors');
            setRefresh(false)
        }, 1500);

    }

    const openSheet = (item) => {
        console.log(item)
            ref.current.snapToIndex(0)
    }
    
    const deleteAlert = () =>
    Alert.alert(
        "Προσοχή!",
        "Θέλετε σίγουρα να διαγράψετε αυτό το χωράφι;",
        [
        {
            text: "Ακύρωση",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
        { text: "Επιβεβαίωση", onPress: () => console.log("OK Pressed") }
        ]
    );
  
    const navigation = useNavigation();
    const {
        params: {
            item
        }
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <>
        <StatusBar animated style={item.type === 'corn' ? 'light' : (item.type === 'cotton' ? 'light' : (item.type === 'tomato' ? 'light' : (item.type === 'onion' ? 'light' : 'dark')))}/>
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
        
                         
        { item.irrigation !== 'none' ? 
            <Image
                style={{height: 260, width: '100%'}}
                source={item.type === 'corn' ? require('../assets/images/util/corn2.jpg') : (item.type === 'cotton' ? require('../assets/images/util/cotton3.jpg') : (item.type === 'barley' ? require('../assets/images/util/barley1.jpg') : (item.type === 'tomato' ? require('../assets/images/util/tomato1.jpg') : (item.type === 'melon' ? require('../assets/images/util/melon1.jpg') : (item.type === 'watermelon' ? require('../assets/images/util/watermelon1.jpg') : (item.type === 'onion' ? require('../assets/images/util/onion4.jpg') : require('../assets/images/util/trees3.jpg')))))))}
            />
        :  
            <Image
                style={{height: 260, width: '100%'}}
                source={require('../assets/images/util/dan-senior-qp16Xm2EweY-unsplash.jpg')}
            />
        }
        
        <ScrollView
            style={{backgroundColor: 'white'}}
            refreshing={false}
            extraData= {() =>pullFields()}
            refreshControl= {
                <RefreshControl refreshing={refresh} onRefresh={() =>refreshSensors()} colors={['yellowgreen']}/>
            }
        >
            <View style={{position: 'relative', marginBottom: 40}}>

                {/* ΟΝΟΜΑ & STATUS */}
                <View style={[styles.container, {marginTop: 20}]}>
                    <View style={[styles.horizonalItem, {position: 'relative'}]}>
                        <Text style={styles.fieldName}>{item.name}</Text>
                        <Text style={{position: 'absolute', left: 5, top: -10, fontSize: 11, color: '#AAA'}}>id: {item.id}</Text>
                        
                        { item.irrigation !== 'none' ? 
                            <Pressable onPress={() => {openSheet(item)}} style={styles.status}>
                                <Image
                                    style={styles.statusLogo}
                                    source={item.status === 'active' ? require('../assets/images/icons/check2.png') : (item.status === 'error' ? require('../assets/images/icons/092-forbidden-1.png') : require('../assets/images/icons/093-pause.png'))}
                                />
                                {item.status === 'active' && <Text style={styles.statusTextOK}>ποτίζει</Text>}
                                {item.status === 'error' && <Text style={styles.statusTextError}>διακοπή</Text>}
                                {item.status === 'stop' && <Text style={styles.statusTextStopped}>σταματημένο</Text>}
                            </Pressable>
                         : null }
                        
                    </View>
                </View>

                {/* ΛΕΠΤΟΜΕΡΕΙΕΣ ΧΩΡΑΦΙΟΥ */}
                <View style={styles.container}>
                    <View style={styles.detailsTop}>
                        <Text style={styles.detailsTopText}>Στοιχεία:</Text>
                    </View>
                    <View style={styles.detailsMain}>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/007-frame.png')} /> */}
                            <Text style={styles.sensorText}>{item.stremma}στρ.</Text>
                            <Text style={styles.sensorDesc}>Μέγεθος χωραφιού</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/073-bookmark.png')} /> */}
                            <Text style={styles.sensorText}>{item.owner}</Text>
                            <Text style={styles.sensorDesc}>Ιδιοκτήτης</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/i-user2.png')} /> */}
                            <Text style={styles.sensorText}>{item.worker}</Text>
                            <Text style={styles.sensorDesc}>Καλλιεργητής</Text>
                        </View>
                        { item.irrigation !== 'none' ? 
                            <View style={styles.sensor}>
                                {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/055-withdraw.png')} /> */}
                                <Text style={styles.sensorText}>{item.type === 'corn' ? 'Καλαμπόκι' : (item.type === 'cotton' ? 'Βαμβάκι' : (item.type === 'barley' ? 'Κριθάρι' : (item.type === 'tomato' ? 'Τομάτα' : (item.type === 'melon' ? 'Πεπόνι' : (item.type === 'watermelon' ? 'Καρπούζι' : (item.type === 'onion' ? 'Κρεμμύδι' : 'Δέντρα'))))))}</Text>
                                <Text style={styles.sensorDesc}>Τύπος Καλλιέργειας</Text>
                            </View>
                         : null }
                         
                        { item.irrigation !== 'none' ? 
                            <View style={styles.sensor}>
                                {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/072-go-green-1.png')} /> */}
                                <Text style={styles.sensorText}>{item.seed}</Text>
                                <Text style={styles.sensorDesc}>Σπόρος</Text>
                            </View>
                         : null }                        
                        
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/i-water1.png')} /> */}
                            <Text style={styles.sensorText}>{allWaters[item.pump].name}</Text>
                            <Text style={styles.sensorDesc}>Πομόνα</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {item.irrigation === 'gun' ? require('../assets/images/icons/067-plumbing.png') : (item.irrigation === 'drip' ? require('../assets/images/icons/004-hose.png') : require('../assets/images/icons/069-water.png'))} /> */}
                            <Text style={styles.sensorText}>{item.irrigation === 'gun' ? 'Πύραυλος' : (item.irrigation === 'drip' ? 'Σταγονίδια' : (item.irrigation === 'dry' ? 'Ξηρικό' : 'Αγρανάπαυση'))}</Text>
                            <Text style={styles.sensorDesc}>Είδος ποτίσματος</Text>
                        </View>
                    </View>
                </View>

                {/* ΑΙΣΘΗΤΗΡΕΣ */}
                {item.irrigation !== 'none' ?
                <View style={styles.container}>
                    <View style={styles.detailsTop}>
                        <Text style={styles.detailsTopText}>Αισθητήρες:</Text>
                        <Pressable onPress={refreshSensors} style={{marginLeft: 'auto', paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#DEDEDE90', borderRadius: 12, marginRight: 10}}><Text style={{fontSize: 12, fontWeight: 'bold', color: '#09F', lineHeight: 20, letterSpacing: 1}}>ανανέωση</Text></Pressable>
                    </View>
                    <View style={styles.detailsMain}>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/valve8.png')} /> */}
                            <Text style={styles.sensorText}>{item.waterPressure}bar</Text>
                            <Text style={styles.sensorDesc}>Πίεση Πομόνας</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/117-thermometer-4.png')} /> */}
                            <Text style={styles.sensorText}>{item.temp}&#8451;</Text>
                            <Text style={styles.sensorDesc}>Θερμοκρασία</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/101-rain-3.png')} /> */}
                            <Text style={styles.sensorText}>{item.rain / 10}mm</Text>
                            <Text style={styles.sensorDesc}>Βροχόπτωση</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/059-wind-2.png')} /> */}
                            <Text style={styles.sensorText}>{item.wind}Bf / {item.vane}</Text>
                            <Text style={styles.sensorDesc}>Άνεμος</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/077-soil.png')} /> */}
                            <Text style={styles.sensorText}>{item.hSoil}%</Text>
                            <Text style={styles.sensorDesc}>Υγρασία Εδάφους</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/108-humidity-3.png')} /> */}
                            <Text style={styles.sensorText}>{item.hAir}%</Text>
                            <Text style={styles.sensorDesc}>Υγρασία Αέρος</Text>
                        </View>
                        <View style={styles.sensor}>
                            {/* <Image style={styles.sensorImg} source= {require('../assets/images/icons/033-blood-pressure.png')} /> */}
                            <Text style={styles.sensorText}>{item.airPressure}hPa</Text>
                            <Text style={styles.sensorDesc}>Βαρομετρική Πίεση</Text>
                        </View>
                    </View>
                </View>
                : null }

                {/* ΔΙΑΧΕΙΡΙΣΗ */}
                <View style={styles.container}>
                    <View style={styles.detailsTop}>
                        <Text style={styles.detailsTopText}>Διαχείριση:</Text>
                    </View>
                    <View style={styles.detailsMain}>
                        <Pressable style={styles.sensor}>
                            <Image style={styles.sensorImg} source= {require('../assets/images/icons/091-clock.png')} />
                            <Text style={[styles.sensorDesc, {color: 'darkgreen', fontSize: 15}]}>Προγραμματισμός λειτουργίας</Text>
                        </Pressable>
                        <Pressable onPress={() => {console.log('pressed PROGRAM')}} style={styles.sensor}>
                            <Image style={styles.sensorImg} source= {require('../assets/images/icons/017-test-tube.png')} />
                            <Text style={[styles.sensorDesc, {color: '#463561', fontSize: 15}]}>Λίπανση Χωραφιού</Text>
                        </Pressable>
                        <Pressable onPress={() => {console.log('pressed STATS')}} style={styles.sensor}>
                            <Image style={styles.sensorImg} source= {require('../assets/images/icons/020-matrix.png')} />
                            <Text style={[styles.sensorDesc, {color: 'darkorange', fontSize: 15}]}>Στατιστικά Στοιχεία</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Testing', {item})} style={styles.sensor}>
                            <Image style={styles.sensorImg} source= {require('../assets/images/icons/018-edit-1.png')} />
                            <Text style={[styles.sensorDesc, {color: 'steelblue', fontSize: 15}]}>Επεξεργασία Στοιχείων</Text>
                        </Pressable>
                        <Text style={{width: 220, alignSelf: 'center', color: '#A0A0A0', fontSize: 12, textAlign: 'center', marginTop: 30}}>κρατήστε πατημένο το κουμπί για να διαγράψετε το χωράφι</Text>
                        <Pressable onLongPress={deleteAlert} style={[styles.sensor, {marginTop: 30, backgroundColor: 'red', paddingHorizontal: 10, borderRadius: 10}]}>
                            <Image style={styles.sensorImg} source= {require('../assets/images/icons/022-multiply.png')} />
                            <Text style={[styles.sensorDesc, {color: 'white', fontSize: 15}]}>Διαγραφή Χωραφιού</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
        <BottomCard ref={ref} name={item.name} status={item.status}/>
        </>
    )
}

export default FieldsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 50,
        paddingHorizontal: 10
    },
    horizonalItem: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsTop: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    detailsTopText: {
        fontWeight: 'bold',
        letterSpacing: 2,
        marginLeft: 5,
        fontSize: 21,
        color: '#869686'
    },
    detailSingle: {
        marginVertical: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#777'
    },
    item: {
        width: '100%',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 1,
        marginVertical: 15
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 'bold'
    },
    statusLogo: {
        marginRight: 5,
        width: 15,
        height: 15
    },
    statusTextError: {
        fontSize: 18,
        color: 'red',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 15,
        backgroundColor: '#90002220'
    },
    statusTextStopped: {
        fontSize: 18,
        color: 'grey',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 15,
        backgroundColor: '#E1DCC899'
    },
    statusTextOK: {
        fontSize: 18,
        color: 'green',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 15,
        backgroundColor: '#BADA5550'
    },
    fieldName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#596B59'
    },
    detailsMain:{
        borderTopColor: '#F0F0F0FF',
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
        color: '#869686',
        marginLeft: 'auto'
    }
})