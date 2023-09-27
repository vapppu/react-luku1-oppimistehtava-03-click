import { useState } from "react";
import "./App.css";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is usef by pressing the buttons</div>;
  }
  return (
    <div>
      {" "}
      button press history: {props.allClicks.join(" ")}
      <p>Total: {props.allClicks.length}</p>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const newLeft = left + 1;
    setLeft(newLeft);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const newRight = right + 1;
    setRight(newRight);
  };

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  );
};

export default App;
