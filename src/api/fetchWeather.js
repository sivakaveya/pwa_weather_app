import axios from 'axios';

const URL =  'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4f5552e52ad166b5e46c7f6c48849e2b'

export const fetchWeather = async(query)=>{
    const data = await axios.get(URL,{
        params:{
            q: query,
            units:'metric',
            APPID: API_KEY,
        }
    }

    );
    return data.data
}