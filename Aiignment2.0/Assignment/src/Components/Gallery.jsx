import React, { useState } from 'react';

const Gallery = () => {
    const images = [
        { src: "https://placehold.co/100x100", alt: "Black and white image of a waterfall" },
        { src: "https://placehold.co/100x100", alt: "Black and white image of a desert" },
        { src: "https://placehold.co/100x100", alt: "Black and white image of a bird flying" },
        { src: "https://placehold.co/100x100", alt: "Black and white image of a wave" }
    ];

    const handleAddImageClick = () => {
        document.getElementById('fileInput').click();
    };

    const handlePrevClick = () => {
        const container = document.getElementById('imageContainer');
        container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    };

    const handleNextClick = () => {
        const container = document.getElementById('imageContainer');
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <i className="fas fa-question-circle text-gray-400"></i>
                    <button className="bg-gray-700 text-white py-1 px-3 rounded-full">Gallery</button>
                </div>
                <div className="flex space-x-2">
                    <button 
                        className="bg-gray-700 text-white py-1 px-3 rounded-full flex items-center"
                        onClick={handleAddImageClick}
                    >
                        <i className="fas fa-plus mr-1"></i> Add Image
                    </button>
                    <button className="bg-gray-700 text-white py-1 px-3 rounded-full" onClick={handlePrevClick}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button className="bg-gray-700 text-white py-1 px-3 rounded-full" onClick={handleNextClick}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            <div id="imageContainer" className="flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image.src} 
                        alt={image.alt} 
                        className="rounded-lg w-20 h-20 object-cover"
                    />
                ))}
            </div>
            <input type="file" id="fileInput" className="hidden" />
        </div>
    );
};

export default Gallery;
