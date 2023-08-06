import { BackHandler, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetFlatList, useBottomSheet } from '@gorhom/bottom-sheet';
import * as Animatable from 'react-native-animatable';
import Witch from '../components/Switch';

const BottomCard = React.forwardRef((props, ref) => {
    const snapPoints = useMemo(() => ['60%'], []);

    const [refresh, setRefresh] = useState(false)
	const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())

	console.log(props)

    console.log(refresh)

    const doStuff = (e) => {
      setRefresh(true)
      console.log('doStuff refresh: ' + e)

      //ref.current.snapToIndex(1)

      setTimeout(() => {
          setRefresh(false)
          e === 'stop' && props.setStatus('active')
          e === 'active' && props.setStatus('stop')
      }, 1500);
    }

    // useEffect(()=>{
    //   // Closing the BottomSheet on back button
    //   const backAction = (e) => {
    //     ref.current?.close()
		//     console.log('new stuff: ' + e)
    //     if (isSelectionModeEnabled()) {
    //       disableSelectionMode();
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   };
  
    //   const backHandler = BackHandler.addEventListener(
    //     "hardwareBackPress",
    //     backAction
    //   );
  
    //   return () => backHandler.remove();
    // }, [true])

	useEffect(() => {
		return () => {
			console.log('odisseas REFRESH:    ' + refresh)
		}
	}, [refresh])

    // callbacks
    const handleRefresh = useCallback(() => {
      	setRefresh(true)
		console.log('starting refresh: ' + refresh)
		console.log('refresh=== ' + refresh)

      setTimeout(() => {
			console.log('refresh in the timeout: ' + refresh)
          	setRefresh(false)
      }, 1500);
    }, []);

    // renders
    const renderBackdrop = useCallback(
      props => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ), []);

      // render
      const renderItem = useCallback(
        ({ item }) => (
          <>
          <ScrollView>
            <View style={{backgroundColor: 'white', paddingHorizontal: 10, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginBottom: 20}}>
              <Text style={{fontSize: 30, fontWeight: 'bold', marginRight: 10, color: '#596B59'}}>{item.name}</Text>
              {refresh !== true && item.status === 'error' && <Image style={{width: 20, height: 20}} source={require('../assets/images/icons/092-forbidden-1.png')} />}
              {refresh !== true && item.status === 'active' && <Image style={{width: 20, height: 20}} source={require('../assets/images/icons/check2.png')} />}
              {refresh !== true && item.status === 'stop' && <Image style={{width: 20, height: 20}} source={require('../assets/images/icons/093-pause.png')} />}
              {refresh !== true && item.status === 'error' && <View style={{width: '100%'}}><Text style={{fontSize: 12, color: '#900022', fontWeight: 'bold'}}>Το χωράφι έχει διακοπή!!!!!</Text></View>}
              {refresh !== true && item.status === 'active' && <View style={{width: '100%'}}><Text style={{fontSize: 12, color: '#596B59', fontWeight: 'bold'}}>Το χωράφι ποτίζει</Text></View>}
              {refresh !== true && item.status === 'stop' && <View style={{width: '100%'}}><Text style={{fontSize: 12, color: '#909090F0', fontWeight: 'bold'}}>Το χωράφι είναι σταματημένο</Text></View>}
              {refresh === true && <View style={{width: '100%'}}><Text style={{fontSize: 12, color: '#909090F0', fontWeight: 'bold'}}>Ενεργοποίηση...</Text></View>}
            </View>
            <Pressable onPress={()=> {doStuff(item.status)}} style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 15, marginTop: 15, paddingHorizontal: 10, backgroundColor: '#F2FFF2'}}>
              <View style={styles.sensor}>
                  <Text style={styles.sensorDesc}>Λειτουργία Χωραφιού</Text>
                  <View style={{width: 100, height: 15, position: 'absolute', right: 0, top: 8, zIndex: -1}}>
                    <Witch isEnabled={item.status === 'active' ? true : false }/>
                  </View>
              </View>
            </Pressable>
            <View style={styles.detailsTop}>
              <Text style={styles.detailsTopText}>Προγραμματισμός:</Text>
            </View>
            <Text style={{fontSize: 12, paddingHorizontal: 15, color: '#929E91'}}>Επιλέξτε πότε θέλετε να {item.status === 'stop' && <Text style={{fontWeight: 'bold', textDecorationColor: 'black', textDecorationStyle: 'dashed', textDecorationLine: 'underline'}}>ξεκινήσει</Text>}{item.status === 'active' && <Text style={{fontWeight: 'bold', textDecorationColor: 'black', textDecorationStyle: 'dashed', textDecorationLine: 'underline'}}>σταματήσει</Text>} το πότισμα</Text>
            <Pressable style={[styles.btn, {marginTop: 15}]} onLongPress={() => {item.status !== 'error' && handleRefresh()}}><Text style={{color: 'white', padding: 15}}>Επιβεβαίωση</Text><Image style={{width: 20, height: 20, marginRight: 10, transform: [{rotate: '180deg'}]}} source={require('../assets/images/icons/i-left.png')} /></Pressable>
            <Text style={{width: '100%', fontSize: 12, fontWeight: 'bold', color: '#596B59', marginTop: 10, paddingHorizontal: 15}}>** κρατήστε πατημένο το κουμπί για να επιβεβαίωση</Text>
           </ScrollView>
            </>
        ),
        []
      );

  return (
    <BottomSheet
          ref={ref}
          index={-1}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          enablePanDownToClose
    >
        <Animatable.View
             style={styles.card}
             animation= "fadeInUp"
             easing= "ease-in-out"
             duration= {300}
        >
        <BottomSheetFlatList
          data={[props]}
          renderItem={renderItem}
          contentContainerStyle={styles.card}
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
        </Animatable.View>
    </BottomSheet>
  )
})

export default BottomCard

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: '50%',
    backgroundColor: 'white', 
    paddingBottom: 20
  },
  control: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    padding: 20,
    backgroundColor: '#B3D667DD',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    borderRadius: 35,
  },
  btn: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#4F9F8FF0'
  },
  detailsTop: {
      width: '100%',
      marginHorizontal: 10,
      marginTop: 5,
      paddingBottom: 5,
      alignItems: 'center',
      flexDirection: 'row'
  },
  detailsTopText: {
      fontWeight: 'bold',
      letterSpacing: 2,
      marginLeft: 5,
      fontSize: 18,
      color: '#869686'
  },
  sensor: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 4,
      paddingVertical: 10,
      borderBottomWidth: 1,
      paddingRight: 40,
      borderBottomColor: '#DEDEDE90'
  },
  sensorDesc: {
      position: 'relative',
      zIndex: 2,
      fontSize: 15,
      paddingVertical: 10,
      color: '#999',
      marginRight: 15
  },
  toggler: {
  }
})