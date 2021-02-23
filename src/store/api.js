import axios from 'axios'
import { getCoords } from '../modules/utils'

const DAILY_URL ='https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL ='https://api.openweathermap.org/data/2.5/forecast'
const PARAMS = { units: 'metric',  lang: 'kr' , appid: process.env.VUE_APP_APPID }

//현재위치의 navigation.getPosition




const getPosition = async () => {
	return await getDaily(await getCoords())
}

//selCity daily
const getDaily = async (v)=> {
	const params = { ...PARAMS }
	if(typeof v === 'string' || typeof v === 'number') {
		params.id = v
	}
	else {
		params.lat = v.lat
		params.lon = v.lon
	}
	const r = await axios.get(DAILY_URL, { params })
	return r.data
}

//selCity 5day3hour
const getDays = async ()=> {

}

//특정도시 날씨정보 lat,lon => daily
const getWorld = async ()=> {

}

export {getPosition,getDaily,getDays,getWorld}