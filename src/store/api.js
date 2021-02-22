import axios from 'axios'

const APP_ID ='f1856687e44a2152718f62479b072e09'
const DAILY_URL ='https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL ='https://api.openweathermap.org/data/2.5/forecast'
const params = { units: 'metric',  lang: 'kr' , appid: APP_ID }

//현재위치의 navigation.getPosition
const getPosition = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((r) => {
			resolve({ lat: r.coords.latitude, lon: r.coords.longitude })
		}, (err) => {
			reject(err)
		})
	});
}

//selCity daily
const getDaily = async (id)=> {
	params.id = id
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