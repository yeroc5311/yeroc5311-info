import React, { useState } from 'react';

const CounterButton: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>
                Count Guestbook Entries: {count}
            </button>
        </div>
    );
};

export default CounterButton;