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
          <th></th><th>team</th><th>win</th><th>loss</th><th>gb</th><th>w%</th>
        </tr>
        {sorted.map(result => (
          <tr key={result.teamId}>
            <td><img src={teamRefs[result.teamId][1]} style={{width: "25px", height: "25px"}} alt={teamRefs[result.teamId][0]}></img></td>
            <td>{teamRefs[result.teamId][0]}</td>
            <td>{result.win}</td>
            <td>{result.loss}</td>
            <td>{result.gamesBehind}</td>
            <td>{result.winPercentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

var teamRefs = {
  1: ["Atlanta Hawks", "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png"],
  2: ["Boston Celtics", "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png"],
  4: ["Brooklyn Nets", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png"],
  5: ["Charlotte Hornets", "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png"],
  6: ["Chicago Bulls", "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png"],
  7: ["Cleveland Cavaliers", "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/150px-Cavs_de_Cleveland_logo_2017.png"],
  8: ["Dallas Mavericks", "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png"],
  9: ["Denver Nuggets", "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png"],
  10: ["Detroit Pistons", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pistons_logo17.svg/400px-Pistons_logo17.svg.png"],
  11: ["Golden State Warriors", "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png"],
  14: ["Houston Rockets", "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png"],
  15: ["Indiana Pacers", "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png"],
  16: ["Los Angeles Clippers", "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png"],
  17: ["Los Angeles Lakers", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png"],
  19: ["Memphis Grizzlies", "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png"],
  20: ["Miami Heat", "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/Miami_Heat_-_Logo.svg/1200px-Miami_Heat_-_Logo.svg.png"],
  21: ["Milwaukee Bucks", "https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png"],
  22: ["Minnesota Timberwolves", "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png"],
  23: ["New Orleans Pelicans", "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png"],
  24: ["New York Knicks", "https://upload.wikimedia.org/wikipedia/fr/d/dc/NY_Knicks_Logo_2011.png"],
  25: ["Oklahoma City Thunder", "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Thunder_d%27Oklahoma_City_logo.svg/1200px-Thunder_d%27Oklahoma_City_logo.svg.png"],
  26: ["Orlando Magic", "https://upload.wikimedia.org/wikipedia/fr/b/bd/Orlando_Magic_logo_2010.png"],
  27: ["Philadelphia 76ers", "https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png"],
  28: ["Phoenix Suns", "https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png"],
  29: ["Portland Trail Blazers", "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png"],
  30: ["Sacramento Kings", "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png"],
  31: ["San Antonio Spurs", "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png"],
  38: ["Toronto Raptors", "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png"],
  40: ["Utah Jazz", "https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png"],
  41: ["Washington Wizards", "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png"]
}

export default ResultList;
