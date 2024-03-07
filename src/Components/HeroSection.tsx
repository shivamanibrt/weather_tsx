import React, { useEffect, useRef, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { RiCelsiusFill } from "react-icons/ri";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherPartlySunny } from "react-icons/ti";

const HeroSection: React.FC = () => {
    const [searchVisible, setSearchVisible] = useState<boolean>(true);
    const [form, setForm] = useState<object>({});
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleSearch = () => {
        setSearchVisible((prevState) => !prevState);
    };

    const fetchHelper = (e: React.FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [searchVisible]);

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='drop-shadow-2xl min-h-[500px] p-3 justify-center border-t-2 border-r-8 border-b-8 border-l-2 border-customDarkGray -md w-96 bg-customWhite shadow-lg'>
                {/* Weather  */}
                <div className=''>
                    <span className='font-sans flex items-center justify-between mt-4'>
                        <p className='text-customOrange'>Weather</p>
                        <span className='flex gap-2'>
                            {searchVisible ? (
                                <CiSearch
                                    className='mx-5 text-2xl cursor-pointer'
                                    onClick={toggleSearch}
                                />
                            ) : (
                                <form>
                                    <input
                                        className='bg-customWhite border-t-2 border-r-8 border-b-8 border-l-2 w-32 focus:outline-none'
                                        ref={inputRef}
                                    />
                                </form>
                            )}
                            <CiSettings className='text-2xl' />
                        </span>
                    </span>
                </div>

                {/* Location */}
                <div className='mt-5 flex justify-between items-center'>
                    <div className='flex gap-2 border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl   text-customOrange'>
                        <span className='text-customOrange bg-customOrange rounded-r-xl p-1'>
                            <p className='text-white mx-1 bg-customrange rounded text-sm'>
                                Sydney
                            </p>
                        </span>
                        <span className='text-customOrange bg-customOrange rounded-l-xl p-1'>
                            <p className='text-white mx-1 bg-customrange rounded text-sm'>
                                Melbourne
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-2 border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-1'>
                        <span className='text-2xl'>
                            <RiCelsiusFill />
                        </span>
                        <span className='text-2xl'>
                            <TbTemperatureFahrenheit />
                        </span>
                    </div>
                </div>

                {/* mainview */}
                <div className='h-[120px] border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-1 mt-8 bg-customOrange flex gap-4 justify-between p-2'>
                    <div className='flex flex-col items-center text-3xl text-customWhite h-full justify-center'>
                        <p>Sydney</p>
                        <p className='flex mt-2'>25 &deg;</p>
                    </div>
                    <div className='flex flex-col items-center h-full justify-center text-center'>
                        <span className='text-customYellow text-5xl '>
                            <TiWeatherPartlySunny />
                        </span>
                        <p className='text-[10px] w-2/3 mx-auto text-customWhite'>
                            Lorem, adipisicing elit. Dolores, minus.
                        </p>
                    </div>
                </div>

                {/* Temperature,wind,humidity  */}
                <div className='flex justify-between h-[80px] border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-2 mt-3 bg-customPink'>
                    <span className='flex flex-col items-center'>
                        <FaTemperatureEmpty className='text-2xl text-customYellow' />
                        <p className='text-xs text-white'>Temperature</p>
                        <p className='text-xs text-white'>
                            15 &deg; - 20 &deg;
                        </p>
                    </span>
                    <span className='flex flex-col items-center'>
                        <FaWind className='text-2xl text-customYellow ' />
                        <p className='text-xs text-white'>Wind</p>
                        <p className='text-xs text-white'>22 Km/h</p>
                    </span>
                    <span className='flex flex-col items-center'>
                        <WiHumidity className='text-2xl text-customYellow' />
                        <p className='text-xs text-white'>Humidity</p>
                        <p className='text-xs text-white'>50%</p>
                    </span>
                </div>

                {/* today,tommorow */}
                <div className='flex  gap-2 h-[40px] border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-1 mt-3'>
                    <p className=''>Today</p>
                    <p className=''>Tomorrow</p>
                </div>

                {/* temperature  */}
                <div className='flex gap-5 h-[80px] border-t-2 border-r-8 border-b-8 border-l-2 border-customBlack drop-shadow-2xl p-1  mt-3 bg-customGreen'>
                    <span className='flex flex-col items-center justify-center h-full text-center'>
                        <p className='text-sm text-white'>Now</p>
                        <span className='text-customYellow text-xl '>
                            <TiWeatherPartlySunny />
                        </span>
                        <p className='text-sm text-white text-center'>
                            15 &deg;
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
