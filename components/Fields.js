import { FlatList, StyleSheet, Text, View, Image, RefreshControl, TouchableOpacity, Pressable } from 'react-native'
import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import { minDetails, windDetails, rainDetails, hAirDetails, tempDetails, hSoilDetails, pressureDetails, waterDetails } from './Settings'
import { useNavigation } from '@react-navigation/native'
import { allFields, allWaters } from './Data'

const tempField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/icons/117-thermometer-4.png')} />
            {/* <Text style={{marginRight: 10, color: '#86854F', fontSize: 10, fontWeight: 'bold'}}>Θερμοκρασία</Text> */}
            <Text style={styles.sensorText}>{data.temp}&#8451;</Text>
        </View>
    )
}

const rainField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/icons/101-rain-3.png')} />
            {/* <Text style={{marginRight: 10, color: '#86854F', fontSize: 10, fontWeight: 'bold'}}>Βροχόπτωση</Text> */}
            <Text style={styles.sensorText}>{data.rain / 10}mm</Text>
        </View>
    )
}

const windField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/icons/059-wind-2.png')} />
            {/* <Text style={{marginRight: 10, color: '#86854F', fontSize: 10, fontWeight: 'bold'}}>Αέρας</Text> */}
            <Text style={styles.sensorText}>{data.wind}Bf / {data.vane}</Text>
        </View>
    )
}

const pressureField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/icons/033-blood-pressure.png')} />
            {/* <Text style={{marginRight: 10, color: '#86854F', fontSize: 10, fontWeight: 'bold'}}>Ατμοσφαιρική Πίεση</Text> */}
            <Text style={styles.sensorText}>{data.airPressure}hPa</Text>
        </View>
    )
}

const waterField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/icons/valve8.png')} />
            {/* <Text style={{marginRight: 10, color: '#86854F', fontSize: 10, fontWeight: 'bold'}}>Πίεση Πομόνας</Text> */}
            <Text style={styles.sensorText}>{data.waterPressure}bar</Text>
        </View>
    )
}

const hSoilField = (data) => {
    return (        
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/icons/077-soil.png')} />
            {/* <Text style={{marginRight: 10, color: '#86854F', fontSize: 10, fontWeight: 'bold'}}>Υγρασία Εδάφους </Text> */}
            <Text style={styles.sensorText}>{data.hSoil}%</Text>
        </View>
    )
}

const hAirField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/icons/108-humidity-3.png')} />
            {/* <Text style={{marginRight: 10, color: '#86854F', fontSize: 10, fontWeight: 'bold'}}>Υγρασία Αέρος</Text> */}
            <Text style={styles.sensorText}>{data.hAir}%</Text>
        </View>
    )
}

const Fields = React.forwardRef((props, ref) => {

    const urlAxios = 'http://192.168.1.9:19000/public/Data.json';
    const weather = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=fe307a13aaeb4dde5c425dc716003db2'
    const wth = 'https://api.open-meteo.com/v1/forecast?latitude=40.96&longitude=25.13&hourly=temperature_2m,rain,showers'

    const [refresh, setRefresh] = useState(false)
    const [newfields, setFields] = useState(false)

    const pullFields = () =>{
        setRefresh(true)

        setTimeout(() => {
            console.log('Pulled to Refresh')
            fetchFields()
            setRefresh(false)
        }, 1000);
    }

    const fetchFields = async () => {
        try {
          const response = await fetch(urlAxios);
          const json = await response.json();
          setFields(json.allFields)
          //console.log(newfields)
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        //fetchFields()
        console.log('ref: ' + ref)
        //console.log(ref.current)
        console.log(props.setName)
    }, [])
    
    const navigation = useNavigation();

    const openSheet = (item) => {
        console.log(item)
        props.setName(item.name)
        props.setStatus(item.status)
        setTimeout(() => {            
            ref.current.snapToIndex(0)
        }, 1);
    }


  return (
    <View style={styles.lists}>
      <Text style={{paddingVertical: 15, alignSelf: 'center', color: '#86854F', fontWeight: 'bold'}}>Τα χωράφια μου ({allFields.length}):</Text>
      <FlatList
        contentContainerStyle = {styles.flatlist}
        refreshing={false}
        extraData= {newfields}
        refreshControl= {
            <RefreshControl refreshing={refresh} onRefresh={() =>pullFields()} colors={['yellowgreen']}/>
        }
        data= {allFields}
        keyExtractor= {(item) => item.id}
        renderItem= {({item}) => { return(
            <>
                <TouchableOpacity key={item.id} activeOpacity={0.9} style={styles.item} onPress={() => navigation.navigate('FieldsScreen', {item})}>
                    {item.irrigation !== 'none' ?
                    <Pressable onPress={()=>{openSheet(item)}} style={styles.status}>
                        <Image
                            style={styles.statusLogo}
                            source={item.status === 'active' ? require('../assets/images/icons/check2.png') : (item.status === 'error' ? require('../assets/images/icons/092-forbidden-1.png') : require('../assets/images/icons/093-pause.png'))}
                        />
                        {item.status === 'active' && <Text style={styles.statusTextOK}>ποτίζει</Text>}
                        {item.status === 'error' && <Text style={styles.statusTextError}>διακοπή</Text>}
                        {item.status === 'stop' && <Text style={styles.statusTextStopped}>σταματημένο</Text>}
                    </Pressable>
                    : null}

                    <Text style={styles.fieldName}>{item.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <Image
                                style={{width: 20, height: 20, marginRight: 5}}
                                source={require('../assets/images/icons/i-water2.png')}/>
                            <Text style={{color: '#898989', fontSize: 10, letterSpacing: 1, fontWeight: 'bold'}}>{allWaters[item.pump].name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            {/* <Image
                                style={{width: 20, height: 20, marginRight: 4}}
                                source={item.irrigation === 'gun' ? require('../assets/images/icons/067-plumbing.png') : (item.irrigation === 'drip' ? require('../assets/images/icons/004-hose.png') : require('../assets/images/icons/069-water.png'))}/> */}
                            <Text style={{color: '#898989', fontSize: 10, letterSpacing: 1, fontWeight: 'bold'}}> | {item.irrigation === 'gun' ? 'Πύραυλος' : (item.irrigation === 'drip' ? 'Σταγονίδια' : (item.irrigation === 'dry' ? 'Ξηρικό' : 'Αγρανάπαυση'))}</Text>
                        </View>
                        {item.irrigation === 'none' ? null :
                            <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                                {/* <Image
                                    style={{width: 20, height: 20, marginRight: 4}}
                                    source={item.type === 'corn' ? require('../assets/images/icons/034-corn.png') : (item.type === 'cotton' ? require('../assets/images/icons/027-cotton.png') : (item.type === 'barley' ? require('../assets/images/icons/052-barley-1.png') : (item.type === 'wheat' ? require('../assets/images/icons/033-wheat-1.png') : (item.type === 'melon' ? require('../assets/images/icons/038-melon.png') : (item.type === 'watermelon' ? require('../assets/images/icons/037-watermelon-1.png') : (item.type === 'tomato' ? require('../assets/images/icons/040-tomatoes.png') : require('../assets/images/icons/047-onion-1.png')))))))}/> */}
                                <Text style={{color: '#898989', fontSize: 10, letterSpacing: 1, fontWeight: 'bold'}}> | {item.type === 'corn' ? 'Καλαμπόκι' : (item.type === 'cotton' ? 'Βαμβάκι' : (item.type === 'barley' ? 'Κριθάρι' : (item.type === 'tomato' ? 'Τομάτα' : (item.type === 'melon' ? 'Πεπόνι' : (item.type === 'watermelon' ? 'Καρπούζι' : (item.type === 'onion' ? 'Κρεμμύδι' : 'Δέντρα'))))))}</Text>
                            </View>
                        }
                    </View>

                    {minDetails !== true ? null : 
                        <View style={styles.sensors}> 
                            {tempDetails !== true ? null : tempField(item)}
                            {rainDetails !== true ? null : rainField(item)}
                            {windDetails !== true ? null : windField(item)}
                            {hAirDetails !== true ? null : hAirField(item)}
                            {hSoilDetails !== true ? null : hSoilField(item)}
                            {pressureDetails !== true ? null : pressureField(item)}
                            {waterDetails !== true ? null : waterField(item)}
                        </View>
                    }
                    
                </TouchableOpacity>
            </>
            )}
        }
       />
    </View>
  )
})

export default Fields

const styles = StyleSheet.create({
    lists: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    flatlist: {
        width: '100%',
        paddingHorizontal: 10
    },
    item: {
        width: '100%',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginVertical: 15
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 10,
        right: 10,
        fontWeight: 'bold',
        zIndex: 2
    },
    statusLogo: {
        marginRight: 5,
        width: 15,
        height: 15
    },
    statusTextError: {
        color: '#B03D40',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 15,
        backgroundColor: '#90002220'
    },
    statusTextStopped: {
        color: 'grey',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 15,
        backgroundColor: '#E1DCC899'
    },
    statusTextOK: {
        color: '#596B59',
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 15,
        backgroundColor: '#B3D667'
    },
    fieldName: {
        fontSize: 23,
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#596B59'
    },
    sensors:{
        borderTopColor: '#F0F0F0FF',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 10
    },
    sensor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    },
    sensorImg: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    sensorText: {
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#869686'
    }
})