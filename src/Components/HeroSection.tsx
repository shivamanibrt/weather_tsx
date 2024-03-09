import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { CiSettings } from "react-icons/ci";
import { RiCelsiusFill } from "react-icons/ri";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { fetchData } from "./apiHelper";
// import profileImg from "../Icons/profile.jpg";
const profileImg = require("../Icons/profile.jpg");

interface FormState {
    [key: string]: string;
}

interface TempState {
    temp?: number;
    unit?: string;
    tempMax?: number;
    tempMin?: number;
}

const HeroSection: React.FC = () => {
    const [searchVisible, setSearchVisible] = useState<boolean>(true);
    const [form, setForm] = useState<FormState>({});
    const [changeTemp, setChangeTemp] = useState<TempState>({});
    const [city, setCity] = useState<any | null>({});

    const inputRef = useRef<HTMLInputElement>(null);

    const toggleSearch = () => {
        setSearchVisible((prevState) => !prevState);
    };

    const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
        setChangeTemp(city?.temp);
    };

    const handelOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const cityName = form.searchCity;
            const data = await fetchData(cityName);
            setCity(data);
            console.log(data);
            setSearchVisible(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handelOnCelcius = async (e: React.FormEvent) => {
        e.preventDefault();
        if (city) {
            const tempInCelsius = parseFloat((city.temp - 273.15).toFixed(2));
            setChangeTemp({
                temp: tempInCelsius,
                unit: "celsius",
                tempMax: city.tempMax,
                tempMin: city.tempMin,
            });
        }
    };
    const handelOnFahrenheit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (city) {
            const tempInFahrenheit = parseFloat(
                (((city.temp - 273.15) * 9) / 5 + 32).toFixed(2)
            );
            setChangeTemp({
                temp: tempInFahrenheit,
                unit: "fahrenheit",
                tempMax: city.tempMax,
                tempMin: city.tempMin,
            });
        }
    };

    useEffect(() => {
        inputRef.current?.focus() && setForm(form);
    }, [searchVisible, form]);

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='drop-shadow-2xl min-h-[500px] p-3 justify-center border-t-2 border-r-8 border-b-8 border-l-2 border-customDarkGray -md w-96 bg-customWhite shadow-lg'>
                {/* Weather  */}
                <div className=''>
                    <span className='font-sans flex items-center justify-between mt-4'>
                        <div className='text-customOrange text-sm flex gap-2'>
                            <a
                                href='https://shivamanibrt.com/'
                                className='underline'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Created by
                            </a>

                            <span>
                                <img
                                    src={profileImg}
                                    alt='profile'
                                    className='h-5 w-5 rounded-2xl'
                                />
                            </span>
                        </div>
                        <span className='flex gap-2'>
                            {searchVisible ? (
                                <CiSearch
                                    className='mx-5 text-2xl cursor-pointer'
                                    onClick={toggleSearch}
                                />
                            ) : (
                                <form
                                    onSubmit={handelOnSubmit}
                                    className='flex items-center'
                                >
                                    <input
                                        className='bg-customWhite border-t-2 border-r-8 border-b-8 border-l-2 w-32 focus:outline-none '
                                        name='searchCity'
                                        value={form.searchCity || ""}
                                        ref={inputRef}
                                        onChange={handelOnChange}
                                    />
                                </form>
                            )}
                            {/* <CiSettings className='text-2xl' /> */}
                        </span>
                    </span>
                </div>

                {/* Location */}
                <div className='mt-5 flex justify-between items-center'>
                    <div className='flex gap-2 border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl   text-customOrange'>
                        {city ? (
                            <span className='text-customOrange bg-customOrange rounded-r-xl p-1'>
                                <p className='text-white mx-1 bg-customrange rounded text-sm'>
                                    {city?.name}
                                </p>
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className='flex gap-2 border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl'>
                        <button
                            className={`text-2xl hover:bg-customOrange p-1 rounded-r-xl ${
                                changeTemp?.unit === "celsius"
                                    ? "bg-customOrange text-customWhite"
                                    : ""
                            }`}
                            onClick={handelOnCelcius}
                        >
                            <RiCelsiusFill />
                        </button>
                        <button
                            className={`text-2xl hover:bg-customOrange p-1 rounded-l-xl ${
                                changeTemp?.unit === "fahrenheit"
                                    ? "bg-customOrange text-customWhite"
                                    : ""
                            }`}
                            onClick={handelOnFahrenheit}
                        >
                            <TbTemperatureFahrenheit />
                        </button>
                    </div>
                </div>

                {/* mainview */}
                <div className='h-[120px] border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-1 mt-8 bg-customOrange flex gap-4 justify-between p-2'>
                    <div className='flex flex-col items-center text-3xl text-customWhite h-full justify-center'>
                        <p>{city?.name}</p>
                        <p className='flex mt-2'>
                            {changeTemp?.temp ? changeTemp?.temp : city?.temp}{" "}
                            &deg;
                        </p>
                    </div>
                    <div className='flex flex-col items-center h-full justify-center text-center'>
                        <span className='text-customYellow text-5xl '>
                            <TiWeatherPartlySunny />
                        </span>
                        <p className='text-[10px] w-2/3 mx-auto text-customWhite'>
                            {city?.description}
                        </p>
                    </div>
                </div>

                {/* Temperature,wind,humidity  */}
                <div className='flex justify-between h-[80px] border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-2 mt-3 bg-customPink'>
                    <span className='flex flex-col items-center'>
                        <FaTemperatureEmpty className='text-2xl text-customYellow' />
                        <p className='text-xs text-white'>min - max</p>
                        <p className='text-xs text-white'>
                            {changeTemp?.temp
                                ? `${changeTemp?.tempMin}° - ${changeTemp?.tempMax}°`
                                : `${city?.tempMin}° - ${city?.tempMax}°`}
                        </p>
                    </span>
                    <span className='flex flex-col items-center'>
                        <FaWind className='text-2xl text-customYellow ' />
                        <p className='text-xs text-white'>Wind</p>
                        <p className='text-xs text-white'>
                            {city?.windSpeed} Km/h
                        </p>
                    </span>
                    <span className='flex flex-col items-center'>
                        <WiHumidity className='text-2xl text-customYellow' />
                        <p className='text-xs text-white'>Humidity</p>
                        <p className='text-xs text-white'>{city?.humidity}%</p>
                    </span>
                </div>

                {/* today,tommorow */}
                <div className='flex items-center gap-2 h-[40px] border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-1 mt-3'>
                    <p className=''>Today</p>
                    <p className='text-[10px]'>
                        This feature is only available to full API user.
                    </p>
                </div>

                {/* temperature  */}
                <div className='flex gap-5 h-[80px] border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-1  mt-3 bg-customGreen'>
                    <span className='flex flex-col items-center justify-center h-full text-center'>
                        <p className='text-sm text-white'>Now</p>
                        <span className='text-customYellow text-xl '>
                            <TiWeatherPartlySunny />
                        </span>
                        <p className='text-sm text-white text-center'>
                            {changeTemp?.temp ? changeTemp?.temp : city?.temp}{" "}
                            &deg;
                        </p>
                    </span>
                    <span className='flex items-center flex-col items-center justify-center h-full text-center'>
                        <p className='text-sm text-white'>
                            1 hour later or any other interval
                        </p>
                        <span className='text-customYellow text-xl '>
                            <TiWeatherPartlySunny />
                        </span>
                        <p className='text-[10px] text-white'>
                            This feature is only available to full API user.
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
