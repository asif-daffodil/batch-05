import salman from "../../../assets/images/salman.jpg"
import sallu from "./Ceo.module.css"

const Ceo = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 border rounded flex gap-4 mt-10">
            <img src={salman} alt="" className="w-96" />
            <div className="flex flex-col items-start gap-4">
                <h2 className="text-3xl">Mr Salman</h2>
                <p className={sallu.firstPara}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea fugiat necessitatibus maxime! Quas dolore ratione rem autem ad molestiae nostrum. Natus quam aliquid ullam voluptate harum? Vero enim, corporis soluta repudiandae a molestias facere, saepe nesciunt accusamus, explicabo architecto! Iusto incidunt doloremque doloribus itaque ullam eaque, blanditiis impedit deserunt!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea fugiat necessitatibus maxime! Quas dolore ratione rem autem ad molestiae nostrum. Natus quam aliquid ullam voluptate harum? Vero enim, corporis soluta repudiandae a molestias facere, saepe nesciunt accusamus, explicabo architecto! Iusto incidunt doloremque doloribus itaque ullam eaque, blanditiis impedit deserunt!
                </p>
                <button className="border rounded px-4 py-1 cursor-pointer">Read more</button>
            </div>
        </div>
    );
};

export default Ceo;