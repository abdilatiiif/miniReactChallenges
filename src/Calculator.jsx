import React from "react";

export default function Calculator() {
  const [display, setDisplay] = React.useState("");
  const [operator, setOperator] = React.useState(null);
  const [tall, setTall] = React.useState(null);

  function handleButtonClick(event) {
    const value = event.target.getAttribute("data-value");

    console.log(value);
    setDisplay((prevDisplay) => prevDisplay + value);

    if (value === "AC") {
      setDisplay("");
      setOperator(null);
      setTall(null);
    }
  }

  return (
    <div className="container w-2/6 mx-auto mt-5 bg-black border-2 rounded-xl">
      <div className="flex items-end justify-end p-4 overflow-hidden text-3xl bg-gray-300 min-h-32">
        {display}
      </div>
      <div className="m-2 text-white btn--container">
        <section className="flex items-center justify-around my-3">
          <button
            data-value="AC"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            AC
          </button>
          <button
            data-value="√"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            √
          </button>
          <button
            data-value="%"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            %
          </button>
          <button
            data-value="/"
            onClick={handleButtonClick}
            className="p-3 text-xl text-white bg-orange-500 rounded-full knapp text-bold"
          >
            ➗
          </button>
        </section>
        <section className="flex items-center justify-around my-3">
          <button
            data-value="1"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            1
          </button>
          <button
            data-value="2"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            2
          </button>
          <button
            data-value="3"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            3
          </button>
          <button
            data-value="*"
            onClick={handleButtonClick}
            className="p-3 text-xl text-white bg-orange-500 rounded-full knapp text-bold"
          >
            *
          </button>
        </section>
        <section className="flex items-center justify-around my-3">
          <button
            data-value="4"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            4
          </button>
          <button
            data-value="5"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            5
          </button>
          <button
            data-value="6"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            6
          </button>
          <button
            data-value="-"
            onClick={handleButtonClick}
            className="p-3 text-xl text-white bg-orange-500 rounded-full knapp text-bold"
          >
            -
          </button>
        </section>
        <section className="flex items-center justify-around my-3">
          <button
            data-value="7"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            7
          </button>
          <button
            data-value="8"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            8
          </button>
          <button
            data-value="9"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            9
          </button>
          <button
            data-value="+"
            onClick={handleButtonClick}
            className="p-3 text-xl text-white bg-orange-500 rounded-full knapp text-bold"
          >
            +
          </button>
        </section>
        <section className="flex items-center justify-around my-3">
          <button
            data-value="x"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            ❌
          </button>
          <button
            data-value="0"
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            0
          </button>
          <button
            data-value=","
            onClick={handleButtonClick}
            className="p-4 bg-gray-600 rounded-full knapp text-bold text-cyan-300"
          >
            ,
          </button>
          <button
            data-value="="
            onClick={handleButtonClick}
            className="p-3 text-xl text-white bg-orange-500 rounded-full knapp text-bold"
          >
            =
          </button>
        </section>
      </div>
    </div>
  );
}
