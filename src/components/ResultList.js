import React from "react";

function ResultList(props) {
  return (
    <table className="table table-bordered table-sm">
      <tbody>
        <tr>
          <th>image</th><th>first</th><th>last</th><th>email</th><th>age  <button>sort</button></th><th>gender  <button>filter</button></th>
        </tr>
        {props.results.map(result => (
          <tr key={result.id}>
            <td><img src={result.picture.thumbnail} alt={result.name.first}></img></td><td>{result.name.first}</td><td>{result.name.last}</td><td>{result.email}</td><td>{result.dob.age}</td><td>{result.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
