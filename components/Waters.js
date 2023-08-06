import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { allWaters } from './Data'

const Waters = () => {
  return (
    <>

    {/* ΠΟΜΟΝΕΣ */}
    <View>
        <FlatList
            style={{minHeight: 90}}
            horizontal={true}
            data= {allWaters}
            keyExtractor= {(item) => {item.id}}
            renderItem= {({item}) => { return(
                <>
                    <TouchableOpacity activeOpacity={0.7} style={{minWidth: 150, height: '100%', backgroundColor: '#FEFEFEF5', marginHorizontal: 5, padding: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
                        <Text style={styles.fieldName}>{item.name}</Text>
                        
                        <View style={styles.status}>
                            <Image
                                style={styles.statusLogo}
                                source= {require('../assets/images/icons/019-branch.png')}
                            />
                            {item.split === true ? <Text>{item.splitIds.length}</Text> : <Text>1</Text>}
                        </View>
                    </TouchableOpacity>
                </>
            )}
        }
       />
    </View>
    </>
  )
}

export default Waters

const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        paddingHorizontal: 10
    },
    item: {
        width: '100%',
        minHeight: 150,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 3,
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
        color: 'darkgrey',
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
    }
})