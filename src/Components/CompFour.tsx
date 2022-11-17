import React,{ReactNode, useState} from "react";
import { useSelector } from "react-redux";

interface Props {}

const CompFour = () => {
  const [data, setData] = useState(
    useSelector((state:any) => state.user)
  );
  const onchangeClick = () => {};
  return (
    <>
      <div>
        <h4>{data.name}  From component Four</h4>
        <div>
          <input
            type="text"
            placeholder="Enter Here"
            onChange={(e) => setData(e.target.value)}
          />
          <button onClick={() => onchangeClick()}>Click</button>
        </div>
        <p>{data.email}</p>
      </div>
    </>
  );
};

export default CompFour;
