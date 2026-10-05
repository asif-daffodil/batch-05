import { useEffect } from "react";
import { useNavigate } from "react-router";


const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/about")
        }, 2000)
    })



    return (
        <div>
            Home Page
            <button onClick={() => navigate("/contact")}>Go to Contact</button>
        </div>
    );
};

export default Home;