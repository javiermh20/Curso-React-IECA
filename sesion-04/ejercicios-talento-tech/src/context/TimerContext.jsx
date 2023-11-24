import { createContext, useContext, useEffect, useState } from "react";

const TimerCounterContext = createContext();

export const useTimerContext = () => useContext(TimerCounterContext);

export const TimerProvider = ({ children }) => {
    const [seconds, setSeconds] = useState(0);
    const [formatedTime, setFormatedTime] = useState("00:00:00");

    const reset = () => {
        setSeconds(0);
        setFormatedTime("00:00:00");
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secondsLeft = seconds % 60;

        const formatedHours = hours < 10 ? `0${hours}` : hours;
        const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formatedSeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

        setFormatedTime(`${formatedHours}:${formatedMinutes}:${formatedSeconds}`);
    }, [seconds]);

    return (
        <TimerCounterContext.Provider value={{ time: formatedTime, reset }}>
            {children}
        </TimerCounterContext.Provider>
    )
}