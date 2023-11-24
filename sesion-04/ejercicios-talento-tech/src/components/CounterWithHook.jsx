import { useCounter } from "../hooks/useCounter";

 const CounterWithHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return(
        <div className="p-4 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Counter with Hook</h2>
            <p className="text-2xl font-bold">{counter}</p>
            <div className="flex gap-4">
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
};

export default CounterWithHook;