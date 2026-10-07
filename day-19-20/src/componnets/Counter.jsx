import { useState } from "react";


const Counter = () => {
    const [num, setNum] = useState(1)

    return (
        <div className="text-center text-3xl py-5 flex justify-center gap-3 items-center">
            <button className="border rounded w-12 h-12 cursor-pointer" onClick={() => setNum(num + 1)} >+</button>
            <input type="text" value={num} className="border rounded w-20 text-center h-12" onChange={e => setNum(+e.target.value)} maxLength="4" />
            <button className="border rounded w-12 h-12 cursor-pointer" onClick={() => setNum(num - 1)}>-</button>
        </div>
    );
};

export default Counter;