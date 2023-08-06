export let minDetails = true
export let tempDetails = true
export let windDetails = true
export let rainDetails = true
export let hSoilDetails = true
export let hAirDetails = true
export let pressureDetails = true
export let waterDetails = true
export let profilePic = require('../assets/images/profile/2.jpg');
export let profileName = 'Fat Ronaldo';

export const updateSettings = ({e}) => {
    console.log('minDetails = ' + e)
    minDetails = e
}