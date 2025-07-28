import React from 'react';

const PCSpecs: React.FC = () => {
    const specs = {
        processor: "Intel Core i9-11900K",
        graphicsCard: "NVIDIA GeForce RTX 3080",
        ram: "32GB DDR4",
        storage: "1TB NVMe SSD",
        motherboard: "ASUS ROG Strix Z590-E",
        powerSupply: "750W Gold Certified",
    };

    return (
        <div style={{ fontFamily: 'JetBrains Mono', color: '#FFFFFF' }}>
            <h2>PC Specifications</h2>
            <ul>
                <li><strong>Processor:</strong> {specs.processor}</li>
                <li><strong>Graphics Card:</strong> {specs.graphicsCard}</li>
                <li><strong>RAM:</strong> {specs.ram}</li>
                <li><strong>Storage:</strong> {specs.storage}</li>
                <li><strong>Motherboard:</strong> {specs.motherboard}</li>
                <li><strong>Power Supply:</strong> {specs.powerSupply}</li>
            </ul>
        </div>
    );
};

export default PCSpecs;