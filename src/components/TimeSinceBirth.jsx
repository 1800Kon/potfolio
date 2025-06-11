import { useEffect, useState } from 'react';

export default function TimeSinceBirth() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const start = new Date("2001-03-08T00:00:00Z");

        function getTimeDiff() {
            const now = new Date();
            let diff = Math.floor((now - start) / 1000); // in seconds

            const years = Math.floor(diff / (365.25 * 24 * 60 * 60));
            diff -= years * 365.25 * 24 * 60 * 60;

            const months = Math.floor(diff / (30.44 * 24 * 60 * 60));
            diff -= months * 30.44 * 24 * 60 * 60;

            const days = Math.floor(diff / (24 * 60 * 60));
            diff -= days * 24 * 60 * 60;

            const hours = Math.floor(diff / (60 * 60));
            diff -= hours * 60 * 60;

            const minutes = Math.floor(diff / 60);
            diff -= minutes * 60;

            const seconds = Math.floor(diff);

            return `${years}y ${months}mo ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        function update() {
            setTime(getTimeDiff());
        }

        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span>{time}</span>

    );
}
