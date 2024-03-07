import axios, { AxiosResponse } from "axios";

interface WeatherData {
    temperature: number;
    humidity: number;
}

export const fetchData = async (city: string): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=087dccd1e78994501018c211140edd5a`
        );

        const weatherData: WeatherData = {
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
        };

        return weatherData;
    } catch (error) {
        console.log(error);
    }
};
