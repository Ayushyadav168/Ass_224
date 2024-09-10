import React, { useState } from 'react';
import TabButton from './TabButton';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Recommended from './Recommended';

const ProfileCard = () => {
    const [activeTab, setActiveTab] = useState('About Me');

    return (
        <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-question-circle text-gray-400"></i>
                    <div className="flex space-x-2">
                        <TabButton label="About Me" isActive={activeTab === 'About Me'} onClick={() => setActiveTab('About Me')} />
                        <TabButton label="Experience" isActive={activeTab === 'Experience'} onClick={() => setActiveTab('Experience')} />
                        <TabButton label="Recommended" isActive={activeTab === 'Recommended'} onClick={() => setActiveTab('Recommended')} />
                    </div>
                </div>
            </div>
            {activeTab === 'About Me' && <AboutMe />}
            {activeTab === 'Experience' && <Experience />}
            {activeTab === 'Recommended' && <Recommended />}
        </div>
    );
};

export default ProfileCard;
