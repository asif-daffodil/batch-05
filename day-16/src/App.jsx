import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const btnText = "Read More"
  const btnDesign = {
    borderWidth: 0,
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
    padding: "8px 16px"
  }

  return (
      <div className="flex flex-col gap-4 items-center text-center w-94 mx-auto border rounded p-4 my-5">
        <Header msg1="Header Meassge 1" msg2="ha ha ha" />
        <Header msg1="Another Header Meassge 2" msg2="ho ho ho" />
        <h1 className="text-3xl text-blue-600">Hello World</h1>
        <p style={{color: "red", backgroundColor: "lightyellow"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dicta error. Nobis optio in facere neque dolores magni ipsum autem illum voluptatem mollitia dignissimos architecto iure eaque laborum unde possimus, ad nam. Velit dolore quisquam esse sapiente expedita sint nulla.
        </p>
        <button style={btnDesign}>{btnText}</button>
        <Footer />
      </div>
  );
};

export default App;