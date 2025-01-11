import { useState } from "react";
import Item from "./Item.jsx";

export default function Form() {
  const [taskItem, setTaskItem] = useState([]);

  function taskInfo(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const task = formData.get("task");
    const when = formData.get("when");
    const time = formData.get("time");
    const category = formData.get("category");

    console.log(task, when, time, category);
  }

  return (
    <>
      <form
        onSubmit={taskInfo}
        className="flex items-center justify-around gap-5 py-3"
      >
        <label htmlFor="task">
          <input
            className="p-3 text-black placeholder-gray-600 bg-yellow-500"
            type="text"
            placeholder="Name of your task...."
            name="task"
          />
        </label>
        <label htmlFor="when">
          <input
            className="p-3 text-black bg-yellow-500"
            type="date"
            name="when"
          />
        </label>
        <label htmlFor="time">
          <input
            className="p-3 text-black bg-yellow-500"
            type="time"
            name="time"
          />
        </label>
        <label htmlFor="category">
          <select className="p-3 text-black bg-yellow-500" name="category">
            <option value="">choose a category</option>
            <option value="hjemme">Hjemme</option>
            <option value="skole">Skole</option>
            <option value="jobb">Jobb</option>
            <option value="fritid">Fritid</option>
            <option value="annet">annet</option>
          </select>
        </label>
        <button
          type="submit"
          className="absolute p-4 text-white bg-red-400 rounded-full right-4"
        >
          Add
        </button>
      </form>

      {/** Item Returns here */}
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  );
}
