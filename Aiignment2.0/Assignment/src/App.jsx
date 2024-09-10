import React from 'react';
import ProfileCard from './Components/ProfileCard';
import Gallery from './Components/Gallery';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Recommended from './Components/Recommended';
import './index.css';  // or './App.css'

const App = () => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-6xl">
            <div className="hidden md:block md:w-1/2"></div>
            <div className="w-full md:w-1/2 space-y-6 p-4">
            <AboutMe />
            <Experience />
            <Recommended />
                <ProfileCard />
                <Gallery />
            </div>
        </div>
    );
};

export default App;
