import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

const Bonus = () => {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>{`Total Bonus: ${points}`}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
};

export default Bonus;
