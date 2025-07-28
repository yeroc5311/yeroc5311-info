import React, { useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [isFlashbang, setIsFlashbang] = useState(true);

    const toggleTheme = () => {
        setIsFlashbang(!isFlashbang);
        document.body.style.backgroundColor = isFlashbang ? '#000000' : '#FFFFFF';
        document.body.style.color = isFlashbang ? '#FFFFFF' : '#000000';
    };

    return (
        <button onClick={toggleTheme} style={{ fontFamily: 'JetBrains Mono', padding: '10px', border: 'none', cursor: 'pointer' }}>
            Switch to {isFlashbang ? 'Void' : 'Flashbang'} Mode
        </button>
    );
};

export default ThemeToggle;