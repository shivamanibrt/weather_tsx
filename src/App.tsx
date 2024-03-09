import React from "react";
import "./App.css";
import HeroSection from "./Components/HeroSection";
import Header from "./Components/Header";

const App: React.FC = () => {
    return (
        <div className='h-screen bg-customMainWhite flex flex-col'>
            <Header />
            <HeroSection />
        </div>
    );
};

export default App;
