import React from "react";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Status Code</th>
          <th>Content Length</th>
          <th>Response Time</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>https://countingup.com</td>
          <td>200</td>
          <td>37203</td>
          <td>130</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
