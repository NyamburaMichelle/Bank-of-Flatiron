import React, { useState } from "react";

function Search({ transactions}) {
  const [searchQuery, setSearchQuery] = useState("");

  //const handleChange = (e) => {
    //const query = e.target.value;
    //setSearchQuery(query);

    const filtered = transactions.filter((transaction) =>
      transaction.description
    );

    setFilteredTransactions(filtered);
  ;

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchQuery}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );

}
export default Search;
