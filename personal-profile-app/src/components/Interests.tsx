import React from 'react';

const Interests: React.FC = () => {
    const interestsList = [
        'Coding',
        'Gaming',
        'Reading',
        'Traveling',
        'Music',
        'Photography',
        // Add more interests as needed
    ];

    return (
        <div className="interests">
            <h2>My Interests</h2>
            <ul>
                {interestsList.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    );
};

export default Interests;