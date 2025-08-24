import React from 'react';

const StaticBackground = () => {
    // Ganti 'background.jpg' dengan nama file foto Anda
    const imageUrl = '/background.jpg';

    return (
        <div
            className="fixed inset-0 -z-20 bg-cover bg-center blur-sm"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
    );
};

export default StaticBackground;