import { useState } from "react";

export default function DateCounter() {
  const [count, setCount] = useState(0);

  const date = new Date();

  const [string, setString] = useState(date.toLocaleDateString());

  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
    console.log("minus clicked");
    date.setDate(date.getDate() - 1);
    dateString();
  }

  function dateString() {
    let dag = count > 1 ? "dager" : "dag";

    return setString(
      `${dag} fra nå ${count > 0 ? "er" : "var"} ${date.toLocaleDateString()}`
    );
  }

  function handlePlus() {
    console.log("plus clicked");
    date.setDate(date.getDate() + 1);
    dateString();
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="flex items-center gap-4 p-10">
      <button onClick={handleMinus} className="p-5 text-2xl bg-cyan-300">
        {" "}
        -{" "}
      </button>
      <h4 className="text-2xl bold">{count}</h4>
      <button onClick={handlePlus} className="p-5 text-2xl bg-orange-500">
        {" "}
        +{" "}
      </button>

      <div>
        {" "}
        <h3>
          {count} {string}
        </h3>
      </div>
    </div>
  );
}
