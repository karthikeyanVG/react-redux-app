import React,{useState} from "react";
import { useSelector } from "react-redux";
interface Props {}

const CompThree = () => {
  const [data, setData] = useState(
    useSelector((state: any) => state.user.name)
  );
  const onchangeClick = () => {};
  return (
    <>
      <div>
        <h3>{data}  From component Three </h3>
        <div>
          <input
            type="text"
            placeholder="Enter Here"
            onChange={(e) => setData(e.target.value)}
          />
          <button onClick={() => onchangeClick()}>Click</button>
        </div>
      </div>
    </>
  );
};

export default CompThree;
