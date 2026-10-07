import { Helmet } from "react-helmet";
import Ceo from "../componnets/about/ceo/Ceo";
import Students from "../componnets/Students";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Ceo />
            <Students />
        </div>
    );
};

export default About;