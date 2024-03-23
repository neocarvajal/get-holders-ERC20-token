import React from 'react';

const ViewHolders = (data) => {
  const Addresses = data.data;
  const BaseDir = "https://basescan.org/address/";
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Address</th>
	  <th scope="col">BaseScan View</th>
        </tr>
      </thead>
      <tbody>
        {
          Addresses.map((address, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{address}</td>
		<td><a href={BaseDir+address}  target="_blank">Ver en BaseScan.org</a></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default ViewHolders;
