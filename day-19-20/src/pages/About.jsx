import { Helmet } from "react-helmet";
import Ceo from "../componnets/about/ceo/Ceo";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Ceo />
        </div>
    );
};

export default About;