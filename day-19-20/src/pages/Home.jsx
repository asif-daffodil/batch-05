import { Helmet } from "react-helmet";
import Hero from "../componnets/home/Hero";
import ProductsList from "../componnets/home/ProductsList";
import Counter from "../componnets/Counter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero />
            <ProductsList />
            <Counter />
        </div>
    );
};

export default Home;