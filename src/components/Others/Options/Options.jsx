import React from "react";
import { Link } from "react-router-dom";
import "./Options.scss";

const Options = ({ list }) => {
  return (
    <ul className="options">
      {list &&
        list.map((item, i) => {
          return (
            <Link
              key={i}
              to={{ pathname: item.href }}
              className={`option option${i + 1}`}
            >
              <button>{item.option}</button>
            </Link>
          );
        })}
    </ul>
  );
};

export default Options;
