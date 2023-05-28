import { create } from "zustand"

const useMyPlantStore = create((set) => ({
    notifications:[
    {name: 'Владик', recomendate: 'Срочно поставьте в теплое место', plant: '', face: '', elems: ['batery', 'fire', 'rice', 'rain'] },
    {name: 'Владик', recomendate: 'Срочно поставьте в теплое место', plant: '', face: '', elems: ['batery', 'fire', 'rice', 'rain'] },
    {name: 'Владик', recomendate: 'Срочно поставьте в теплое место', plant: '', face: '', elems: ['batery', 'fire', 'rice', 'rain'] }],
    mainPlant: [
        {name: 'Нина', type: 'Dracena Fr', recomendate: 'Полейте через 2 часа', plant: '', face: '', elems: [ 'fire', 'rice', 'rain', 'batery',], date: {temp: '20', hum: '30', light: '10'} },
        {name: 'Нина', type: 'Dracena Fr', recomendate: 'Полейте через 2 часа', plant: '', face: '', elems: [ 'fire', 'rice', 'rain', 'batery',], date: {temp: '20', hum: '30', light: '10'} },
        {name: 'Нина', type: 'Dracena Fr', recomendate: 'Полейте через 2 часа', plant: '', face: '', elems: [ 'fire', 'rice', 'rain', 'batery',], date: {temp: '20', hum: '30', light: '10'} },
]
}))
export default useMyPlantStore