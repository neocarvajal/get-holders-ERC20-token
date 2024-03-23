import React, { useState, useEffect } from 'react';
import ViewHolders from './ViewHolders';

function App() {
  const [walletAddress, setWalletAddress] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const network_id = '8453'; // See https://docs.chainbase.com/reference/supported-chains to get the id of different chains.
  const token_addr = '0xAfb89a09D82FBDE58f18Ac6437B3fC81724e4dF6';

  async function getAll() {
    setSpinner(true);
    fetch(`https://api.chainbase.online/v1/token/holders?chain_id=${network_id}&contract_address=${token_addr}&page=1&limit=100`, {
        method: 'GET',
        headers: {
            'x-api-key': '2e5vPV5gFk8ijSSudGxw8uGD1uK', // Replace the field with your API key.
            'accept': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {

          // console.log(data.data);
          setWalletAddress(data.data);
          setSpinner(false);
        }).catch(error => console.error(error));
  }

  return(
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <h1>Get Holders</h1>
            <ViewHolders data={walletAddress} />
            <button type="button" className="btn btn-primary" onClick={getAll}>
              Get holders
            </button>
            {spinner ? (
              <p>Fetching data from Base Blockchain...</p>
            ) : ""}
          </div>
        </div>
    </div>
  </>
  )
}

export default App;
