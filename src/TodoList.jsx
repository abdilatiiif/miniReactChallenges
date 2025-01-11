import Form from "./Form.jsx";

export default function TodoList() {
  return (
    <div className="container mx-auto text-center bg-amber-600">
      <h1 className="text-4xl text-white"> 👉 Daily Work Objects 👈 </h1>
      <main>
        {/*liste navn*/}
        <div className="">
          <ul className="flex items-center justify-around gap-5 py-3">
            <li className="text-xl text-red-200">Task 📋: </li>
            <li className="text-xl text-blue-300">When 📆: </li>
            <li className="text-xl text-orange-200">Time ⏰: </li>
            <li className="text-xl text-purple-200">Category 📒: </li>
          </ul>
        </div>

        {/*items inputs */}
        <Form />
      </main>
    </div>
  );
}
