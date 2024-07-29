import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

function App() {
    const [countdowns, setCountdowns] = useState([]);
    const [eventName, setEventName] = useState('');
    const [targetDate, setTargetDate] = useState('');

    const handleAddCountdown = () => {
        if (eventName && targetDate) {
            setCountdowns([...countdowns, { eventName, targetDate }]);
            setEventName('');
            setTargetDate('');
        }
    };

    const handleRemoveCountdown = (index) => {
        setCountdowns(countdowns.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <h1>Countdown to Events</h1>
            <div className="add-countdown">
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                />
                <input
                    type="datetime-local"
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                />
                <button onClick={handleAddCountdown}>Add Countdown</button>
            </div>
            <div className="countdown-list">
                {countdowns.map((countdown, index) => (
                    <div key={index} className="countdown-item">
                        <CountdownTimer eventName={countdown.eventName} targetDate={countdown.targetDate} />
                        <button onClick={() => handleRemoveCountdown(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;