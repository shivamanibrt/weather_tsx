import axios, { AxiosResponse } from "axios";
import dotenv from "dotenv";

interface WeatherData {
    name: string;
    temp: number;
    tempMin: number;
    tempMax: number;
    humidity: number;
    description: string;
    windSpeed: number;
}

export const fetchData = async (city: string): Promise<any> => {
    try {
        const api_key = process.env.REACT_APP_API_KEY;
        const { data }: AxiosResponse<any> = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=087dccd1e78994501018c211140edd5a`
        );

        const weatherData: WeatherData = {
            name: data.name,
            temp: data?.main?.temp,
            tempMin: data?.main?.temp_min,
            tempMax: data?.main?.temp_max,
            humidity: data?.main.humidity,
            description: data?.weather[0]?.description,
            windSpeed: data?.wind?.speed,
        };

        return weatherData;
    } catch (error) {
        console.log(error);
    }
};

// Place Sydney response.data.name
// Temp main?.temp
// Description like few clouds weather?.description
// Temp min and max main?.temp_min
//wind  speed wind?.speed
//main?.humidity
