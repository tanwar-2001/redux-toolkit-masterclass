import React, { Fragment } from "react";
import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

const Admin = () => {
  const { data, error, isLoading } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div>
      <div>
        <h4>
          <b>Admin Component</b>
        </h4>
        {error ? (
          <p>Error...</p>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((account) => (
            <p key={account.id}>
              {`${account.id} :${account.amount}`}{" "}
              <button onClick={() => deleteAccount(account.id)}>
                Delete Account
              </button>
              <button
                onClick={() => updateAccount({ id: account.id, amount: 777 })}
              >
                Update account
              </button>
            </p>
          ))
        )}
        <button onClick={() => addAccount(101, data.lenght + 1)}>
          Add account +
        </button>
      </div>
    </div>
  );
};

export default Admin;
