import { Switch } from 'react-native'
import React from 'react'
import { updateSettings, updateTemp } from './Settings'

const Witch = (props) => {
  return (
    <Switch
        trackColor={{ false: "grey", true: "#4F9F8FF0" }}
        thumbColor={'#FFF'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={props.toggleSwitch}
        value={props.isEnabled}
        disabled={true}
    />
  )
}

export default Witch