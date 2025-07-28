import React from 'react';

const Socials: React.FC = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/yourusername' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
        { name: 'Twitter', url: 'https://twitter.com/yourusername' },
        { name: 'Instagram', url: 'https://instagram.com/yourusername' },
    ];

    return (
        <div className="socials">
            <h2>Connect with me</h2>
            <ul>
                {socialLinks.map((social, index) => (
                    <li key={index}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                            {social.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Socials;