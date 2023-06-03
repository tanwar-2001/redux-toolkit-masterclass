import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchUserAccount,
} from "../slices/accountSlice";

const Account = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>
        <h4>
          <b>Account component</b>
        </h4>
        <h3>{`Amount: $${amount}`}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          {`Increment By ${value}`}
        </button>
        <button onClick={() => dispatch(fetchUserAccount(1))}>
          Fetch Account
        </button>
      </div>
    </div>
  );
};

export default Account;
