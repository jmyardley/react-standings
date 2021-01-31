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
            <td>{teamRefs[result.teamId]}</td><td>{result.win}</td><td>{result.loss}</td><td>{result.gamesBehind}</td><td>{result.winPercentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

var teamRefs = {
  1: "Atlanta Hawks",
  2: "Boston Celtics",
  4: "Brooklyn Nets",
  5: "Charlotte Hornets",
  6: "Chicago Bulls",
  7: "Cleveland Cavaliers",
  8: "Dallas Mavericks",
  9: "Denver Nuggets",
  10: "Detroit Pistons",
  11: "Golden State Warriors",
  14: "Houston Rockets",
  15: "Indiana Pacers",
  16: "Los Angeles Clippers",
  17: "Los Angeles Lakers",
  19: "Memphis Grizzlies",
  20: "Miami Heat",
  21: "Milwaukee Bucks",
  22: "Minnesota Timberwolves",
  23: "New Orleans Pelicans",
  24: "New York Knicks",
  25: "Oklahoma City Thunder",
  26: "Orlando Magic",
  27: "Philadelphia 76ers",
  28: "Phoenix Suns",
  29: "Portland Trail Blazers",
  30: "Sacramento Kings",
  31: "San Antonio Spurs",
  38: "Toronto Raptors",
  40: "Utah Jazz",
  41: "Washington Wizards"
}

export default ResultList;
