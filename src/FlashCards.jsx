import JokeData from "./JokeData.js";
import React from "react";
import PropTypes from "prop-types";

export default function FlashCards() {
  const [jokes, setJokes] = React.useState(JokeData);

  const [show, setShow] = React.useState(false);

  return (
    <div>
      {jokes.map((joke, i) => (
        <Joke show={show} key={i} joke={joke} />
      ))}
    </div>
  );
}

function Joke(props) {
  const [show, setShow] = React.useState(false);

  function handleClick() {
    console.log("cliked");
    setShow((prevShow) => !prevShow);
  }

  console.log(show);

  return (
    <div className="border-b-4 border-orange-300 cursor-pointer">
      <h3 onClick={handleClick} className="py-3 mb-6 text-2xl bold">
        {props.joke.setup}
      </h3>
      {show && (
        <p className="p-8 text-xl bg-green-500">{props.joke.punchline}</p>
      )}
    </div>
  );
}

Joke.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
