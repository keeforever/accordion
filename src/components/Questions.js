import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article>
      <div className="question-container">
        <h2>{title}</h2>
        <button
          className="btn-radio"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Questions;
