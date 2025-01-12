import { useState, useRef } from "react";
import Item from "./Item.jsx";

export default function Form() {
  const [taskItems, setTaskItems] = useState([
    /*
    {
      task: "ringe mor",
      when: "2025-01-12",
      time: "10:10",
      category: "jobb",
      id: 192,
    },
    {
      task: "hente bil fra oslo",
      when: "2026-02-12",
      time: "17:10",
      category: "fritid",
      id: 132,
    },
    {
      task: "spille spill",
      when: "2028-01-12",
      time: "09:10",
      category: "fritid",
      id: 112,
    },
    */
  ]);
  const formRef = useRef(null);

  function taskInfo(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const task = formData.get("task");
    const when = formData.get("when");
    const time = formData.get("time");
    const category = formData.get("category");
    const id = Math.trunc(Math.random() * 100 + 1);
    console.log(id);

    setTaskItems((prevTasks) => [
      ...prevTasks,
      {
        task: task,
        when: when,
        time: time,
        category: category,
        id: id,
      },
    ]);
    console.log(taskItems);
    // Reset form inputs
    formRef.current.reset();
  }

  function handleDeleteTask(id) {
    console.log("clicked task", id);

    setTaskItems((prevTaskItems) =>
      prevTaskItems.filter((taskItem) => {
        return taskItem.id !== id;
      })
    );
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={taskInfo}
        className="flex items-center justify-around gap-5 py-3"
      >
        <label htmlFor="task">
          <input
            className="p-3 text-black placeholder-gray-600 bg-yellow-500"
            type="text"
            placeholder="Name of your task...."
            name="task"
            required
          />
        </label>
        <label htmlFor="when">
          <input
            className="p-3 text-black bg-yellow-500"
            type="date"
            name="when"
            required
          />
        </label>
        <label htmlFor="time">
          <input
            className="p-3 text-black bg-yellow-500"
            type="time"
            name="time"
            required
          />
        </label>
        <label htmlFor="category">
          <select
            className="p-3 text-black bg-yellow-500"
            name="category"
            required
          >
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
          className="absolute p-4 text-black bg-green-400 rounded-full right-4"
        >
          Add
        </button>
      </form>

      {/** Item Returns here */}
      {taskItems.map((taskItem, index) => (
        <Item
          taskItem={taskItem}
          key={index}
          handleDeleteTask={handleDeleteTask}
          id={taskItem.id}
        />
      ))}
    </>
  );
}
