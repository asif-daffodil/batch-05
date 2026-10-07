import axios from "axios";
import { useEffect, useState } from "react";



const Students = () => {
    const [std, setStd] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/all-student").then(res => {
            setStd(res.data)
        })
    }, [])

    return (
        <div>
            {std.map(s => (
                <div key={s.id}>{s.name}</div>
            ))}
        </div>
    );
};

export default Students;