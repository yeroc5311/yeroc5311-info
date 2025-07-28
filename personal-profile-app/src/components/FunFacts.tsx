import React from 'react';

const FunFacts: React.FC = () => {
    const funFacts = [
        "I love coding and learning new technologies.",
        "My favorite programming language is TypeScript.",
        "I enjoy playing video games in my free time.",
        "I have a pet cat named Whiskers.",
        "I am a coffee enthusiast."
    ];

    return (
        <div style={{ fontFamily: 'JetBrains Mono', color: '#FFFFFF' }}>
            <h2>Fun Facts</h2>
            <ul>
                {funFacts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default FunFacts;