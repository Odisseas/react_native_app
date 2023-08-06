let windRand = ~~(Math.random() * 15) + 0
let tempRand = ~~(Math.random() * 46) + 0
let pressRand = ~~(Math.random() * 1100) + 250
let wpRand = () => {return( ~~(Math.random() * 12) + 0)}
let rainRand = ~~(Math.random() * 350) + 0
let hsoilRand = ~~(Math.random() * 101) + 20
let hairRand = ~~(Math.random() * 101) + 20
let types = ['cotton', 'barley', 'corn', 'tomato', 'onion', 'onion-red','melon', 'wheat', 'watermelon']
let vanes = ['Α', 'ΝΑ', 'Ν', 'ΝΔ', 'Δ', 'ΒΔ', 'Β', 'ΒΑ']
let flows = () => {return(['active', 'error', 'stop'][Math.floor(Math.random() * ['active', 'error', 'stop'].length)])}

export const allFields = [
    {
        id: '11',
        name: 'Κατσαμάκι',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'gun',
        pump: '4'
    },
    {
        id: '12',
        name: 'Γκουτζιάταρλας',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'none',
        pump: '0'
    },
    {
        id: '13',
        name: 'Πηγαδάκι 60',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'drip',
        pump: '0'
    },
    {
        id: '14',
        name: 'Πηγαδάκι 6',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'dry',
        pump: '0'
    },
    {
        id: '15',
        name: 'Καράπαπα',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'gun',
        pump: '1'
    },
    {
        id: '16',
        name: 'Αναδασμός 28',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'drip',
        pump: '1'
    },
    {
        id: '17',
        name: 'Αναδασμός 50',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'gun',
        pump: '1'
    },
    {
        id: '18',
        name: 'Λίμνη',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'drip',
        pump: '3'
    },
    {
        id: '19',
        name: 'Κάντερε',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'drip',
        pump: '3'
    },
    {
        id: '20',
        name: 'Τσούκας',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'gun',
        pump: '0'
    },
    {
        id: '21',
        name: 'Λοχίας',
        status: flows(),
        type: types[Math.floor(Math.random() * types.length)],
        seed: 'ST474',
        owner: 'Odisseas',
        worker: 'Alex',
        stremma: '25',
        temp: ~~(Math.random() * 46) + 0,
        hAir: ~~(Math.random() * 101) + 20,
        hSoil: ~~(Math.random() * 101) + 20,
        rain: ~~(Math.random() * 350) + 0,
        airPressure: ~~(Math.random() * 1100) + 250,
        waterPressure: wpRand(),
        wind: ~~(Math.random() * 15) + 0,
        vane: vanes[Math.floor(Math.random() * vanes.length)],
        irrigation: 'none',
        pump: '0'
    }
]

export const allWaters = [
    {
        id: '102',
        name: 'Πηγαδάκι',
        split: true,
        splitIds: [allFields[1].id, allFields[2].id, allFields[3].id, allFields[8].id]
    },
    {
        id: '104',
        name: 'Αναδασμός (Ομαδική)',
        split: true,
        splitIds: [allFields[5].id, allFields[8].id]
    },
    {
        id: '106',
        name: 'Κάντερε',
        split: false
    },
    {
        id: '108',
        name: 'Λίμνη',
        split: false
    },
    {
        id: '110',
        name: 'Κατσαμάκι',
        split: false
    }
]