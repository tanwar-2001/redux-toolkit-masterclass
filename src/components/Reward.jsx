import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/reward";

const Reward = () => {
  const rewards = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>{`Total Reward: ${rewards}`}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
};

export default Reward;
