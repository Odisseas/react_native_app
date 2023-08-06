import { FlatList, StyleSheet, Text, View, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { allFields, allWaters } from 'Data'
import { minDetails, windDetails, rainDetails, hAirDetails, tempDetails, hSoilDetails, pressureDetails } from './Settings'

const tempField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/117-thermometer-4.png')} />
            <Text style={styles.sensorText}>{data.temp}&#8451;</Text>
        </View>
    )
}

const rainField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/101-rain-3.png')} />
            <Text style={styles.sensorText}>{data.rain / 10}mm</Text>
        </View>
    )
}

const windField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/059-wind-2.png')} />
            <Text style={styles.sensorText}>{data.wind}Bf / {data.vane}</Text>
        </View>
    )
}

const pressureField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/002-cable.png')} />
            <Text style={styles.sensorText}>{data.pressure}hPa</Text>
        </View>
    )
}

const hSoilField = (data) => {
    return (        
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/078-grass.png')} />
            <Text style={styles.sensorText}>{data.hSoil}%</Text>
        </View>
    )
}

const hAirField = (data) => {
    return (
        <View style={styles.sensor}>
            <Image style={styles.sensorImg} source= {require('../assets/images/108-humidity-3.png')} />
            <Text style={styles.sensorText}>{data.hAir}%</Text>
        </View>
    )
}

const Fields = () => {
    const [refresh, setRefresh] = useState(false)
    const pullFields = () =>{
        setRefresh(true)

        setTimeout(() => {
            setRefresh(false)
        }, 1000);
    }
  return (
    <>

    {/* ΧΩΡΑΦΙΑ */}
    <View style={styles.lists}>
        <Text style={{paddingHorizontal: 10, paddingBottom: 5}}>Τα χωράφια μου ({allFields.length}):</Text>
      <FlatList
        refreshing={false}
        contentContainerStyle = {styles.flatlist}
        extraData= {data}
        refreshControl= {
            <RefreshControl refreshing={refresh} onRefresh={() =>pullFields()} colors={['steelblue']}/>
        }
        data= {data}
        keyExtractor= {(item) => {item.id}}
        renderItem= {({item}) => { return(
            <>
                
                <View style={styles.item}>
                    <View style={styles.status}>
                        <Image
                            style={styles.statusLogo}
                            source={item.status === 'active' ? require('../assets/images/006-check-mark-1.png') : (item.status === 'error' ? require('../assets/images/092-forbidden-1.png') : require('../assets/images/093-pause.png'))}
                        />
                        {item.status === 'active' && <Text style={styles.statusTextOK}>ποτίζει</Text>}
                        {item.status === 'error' && <Text style={styles.statusTextError}>διακοπή</Text>}
                        {item.status === 'stop' && <Text style={styles.statusTextStopped}>σταματημένο</Text>}
                    </View>
                    <Text style={styles.fieldName}>{item.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginRight: 18}}>
                            <Image
                                style={{width: 20, height: 20, marginRight: 4}}
                                source={item.irrigation === 'gun' ? require('../assets/images/076-sprayer.png') : (item.irrigation === 'drip' ? require('../assets/images/004-hose.png') : require('../assets/images/069-water.png'))}/>
                            <Text style={{color: '#999', fontSize: 10, letterSpacing: 1, fontWeight: 'bold'}}>{item.irrigation === 'gun' ? 'Πύραυλος' : (item.irrigation === 'drip' ? 'Σταγονίδια' : (item.irrigation === 'dry' ? 'Ξηρικό' : 'Αγρανάπαυση'))}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <Image
                                style={{width: 20, height: 20, marginRight: 10}}
                                source={require('../assets/images/087-water-tower-2.png')}/>
                            <Text style={{color: '#999', fontSize: 10, letterSpacing: 1, fontWeight: 'bold'}}>{allWaters[item.pump].name}</Text>
                        </View>
                    </View>
                    {minDetails === false ? null : 
                        <View style={styles.sensors}> 
                            {tempDetails === false ? null : tempField(item)}
                            {rainDetails === false ? null : rainField(item)}
                            {windDetails === false ? null : windField(item)}
                            {hAirDetails === false ? null : hAirField(item)}
                            {hSoilDetails === false ? null : hSoilField(item)}
                            {pressureDetails === false ? null : pressureField(item)}
                        </View>
                    }
                    
                </View>
            </>
            )}
        }
       />
    </View>
    </>
  )
}

export default Fields

const styles = StyleSheet.create({
    lists: {
        flex: 1,
        width: '100%'
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
        elevation: 1,
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
    },
    statusLogo: {
        marginRight: 5,
        width: 15,
        height: 15
    },
    statusTextError: {
        color: 'red',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor: '#90002220'
    },
    statusTextStopped: {
        color: 'grey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor: '#50502220'
    },
    statusTextOK: {
        color: 'green',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 4,
        backgroundColor: '#BADA5550'
    },
    fieldName: {
        fontSize: 18,
        fontWeight: 'bold'
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
        color: 'grey'
    }
})