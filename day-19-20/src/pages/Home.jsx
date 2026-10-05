import { Helmet } from "react-helmet";
import Hero from "../componnets/home/Hero";
import ProductsList from "../componnets/home/ProductsList";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero />
            <ProductsList />
        </div>
    );
};

export default Home;