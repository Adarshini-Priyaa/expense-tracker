import React, { useContext } from "react";
import { GlobalContent } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContent);
  const { deleteTransaction } = useContext(GlobalContent);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text} <span>{transaction.amount}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
