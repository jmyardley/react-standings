import React from "react";

function ResultList(props) {
  var arr = props.results;
  var sorted = arr.sort(function(a,b) {
    return b.winPercentage - a.winPercentage;
  })
  return (
    <table className="table table-bordered table-sm">
      <tbody>
        <tr>
          <th>teamid</th><th>win</th><th>loss</th><th>gb</th><th>w%</th>
        </tr>
        {sorted.map(result => (
          <tr key={result.teamId}>
            <td>{result.teamId}</td><td>{result.win}</td><td>{result.loss}</td><td>{result.gamesBehind}</td><td>{result.winPercentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultList;
