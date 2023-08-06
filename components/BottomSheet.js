import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import { gestureHandlerRootHOC, GestureHandlerRootView } from 'react-native-gesture-handler';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const  MAX_OPENING = -SCREEN_HEIGHT / 3

const BottomSheet = () => {

    const ref = useRef(null)

    const onPress = useCallback(() => {}, [])

    const translateY = useSharedValue(0)

    const context = useSharedValue({ y:0 })

    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = { y: translateY.value }
    })
    .onUpdate((event) => {
        console.log(event)
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value, MAX_OPENING)
    })

    useEffect(() => {
        translateY.value = withTiming(-SCREEN_HEIGHT / 5, {damping: 1})
    }, [])

    const animationStuff = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY.value}]
        }
    })
      

    return (
		<>
		{/*  ΤΟ ΧΡΕΙΑΖΕΤΑΙ ΣΤΟ App.js για να λειτοργήσει σε ANDROID */}
		{/* <GestureHandlerRootView style={{flex: 1}}> */}
		<GestureDetector gesture={gesture}>
			<Animated.View style={[styles.bottomSheetContainer, animationStuff]}>
				<View style={styles.line} />
				<Text>TEST</Text>
			</Animated.View>
		</GestureDetector>
		{/* </GestureHandlerRootView> */}
		</>
    )

}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    // elevation: 15,
    position: 'absolute',
    top: SCREEN_HEIGHT,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});

export default BottomSheet;