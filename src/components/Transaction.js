import React, { useEffect, useState } from "react";

function Transaction() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
      });
  }, []);

  return (
    <>
      {transactions.map((oneTransaction) => (
        <tr key={oneTransaction.id}>
          <td>{oneTransaction.date}</td>
          <td>{oneTransaction.description}</td>
          <td>{oneTransaction.category}</td>
          <td>{oneTransaction.amount}</td>
        </tr>
      ))}
    </>
  );
}

export default Transaction;
