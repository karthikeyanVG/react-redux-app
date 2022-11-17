import React,{useState} from "react";
import { useSelector } from "react-redux";

interface Props {}

const CompTwo = () => {
  const [data, setData] = useState(
    useSelector((state: any) => state.user.name)
  );
  const [text, setText] = useState("");

  const onchangeClick = () => {
    setData(text)
  };
  return (
    <>
      <div>
        <h2>{data} From component Two</h2>
        <div>
          <input
            type="text"
            placeholder="Enter Here"
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => onchangeClick()}>Click</button>
        </div>
      </div>
    </>
  );
};

export default CompTwo;
