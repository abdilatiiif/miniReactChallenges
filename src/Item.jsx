import React from "react";

export default function Item() {
  const [checked, SetChecked] = React.useState(false);

  function handleChecked() {
    console.log("checked klikked");

    SetChecked((prevState) => !prevState);
    console.log(checked);
  }

  return (
    <section
      className={`py-3  ${
        checked ? "bg-green-300" : "bg-red-400"
      }  border-b-4 border-black`}
    >
      <ul className="flex items-center justify-around gap-5 py-3">
        <li>task order</li>
        <li>when to do</li>
        <li>time to do</li>
        <li>type of work, where? </li>
        <li>
          completed
          <input onChange={handleChecked} type="checkbox" />
        </li>
      </ul>
    </section>
  );
}
