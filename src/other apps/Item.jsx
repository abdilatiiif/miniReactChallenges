import React from "react";
import PropTypes from "prop-types";

export default function Item(props) {
  const [checked, SetChecked] = React.useState(false);

  function handleChecked() {
    SetChecked((prevState) => !prevState);
  }

  return (
    <section
      className={`py-3  ${
        checked ? "bg-green-300" : "bg-red-400"
      }  border-b-4 border-black`}
    >
      <ul className="flex items-center justify-around gap-5 py-3">
        <li>
          {/** delete task  */}
          <button
            className="p-3 text-white bg-black rounded-full"
            onClick={() => props.handleDeleteTask(props.taskItem.id)}
          >
            X
          </button>
        </li>
        <li> {props.taskItem.task}</li>
        <li>{props.taskItem.when}</li>
        <li>{props.taskItem.time}</li>
        <li>{props.taskItem.category}</li>
        <li>
          completed
          <input onChange={handleChecked} type="checkbox" />
        </li>
      </ul>
    </section>
  );
}

Item.propTypes = {
  taskItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    when: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};
