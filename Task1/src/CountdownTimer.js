import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ eventName, targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="countdown-timer">
            <h2>{eventName}</h2>
            <div className="time-units">
                <div className="time-unit" data-label="Days">
                    <span>{timeLeft.days || '0'}</span>
                </div>
                <div className="time-unit" data-label="Hours">
                    <span>{timeLeft.hours || '0'}</span>
                </div>
                <div className="time-unit" data-label="Minutes">
                    <span>{timeLeft.minutes || '0'}</span>
                </div>
                <div className="time-unit" data-label="Seconds">
                    <span>{timeLeft.seconds || '0'}</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;