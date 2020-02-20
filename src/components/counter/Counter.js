import React, { useState } from 'react';
export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="content">
            <h1 className="count">{counter}</h1>
        </div>
    );
}